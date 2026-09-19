import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z85e-1boc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z85e-1boc"/>`,
		"fallback": "dinkie-icons:one-of-circles-mahjong-filled",
	});
}

export default Component;
