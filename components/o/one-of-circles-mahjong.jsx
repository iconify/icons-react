import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciu9sjufk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciu9sjufk"/>`,
		"fallback": "dinkie-icons:one-of-circles-mahjong",
	});
}

export default Component;
