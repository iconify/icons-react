import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go-e-rcoo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go-e-rcoo"/>`,
		"fallback": "game-icons:pointing",
	});
}

export default Component;
