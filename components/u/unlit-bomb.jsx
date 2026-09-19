import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5veqia8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5veqia8y"/>`,
		"fallback": "game-icons:unlit-bomb",
	});
}

export default Component;
