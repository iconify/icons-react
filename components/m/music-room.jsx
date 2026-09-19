import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuuzw8blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuuzw8blb"/>`,
		"fallback": "guidance:music-room",
	});
}

export default Component;
