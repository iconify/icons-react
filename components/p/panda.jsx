import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgsb5nhjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgsb5nhjq"/>`,
		"fallback": "game-icons:panda",
	});
}

export default Component;
