import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c99w-65vc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c99w-65vc"/>`,
		"fallback": "dinkie-icons:seven-of-circles-mahjong",
	});
}

export default Component;
