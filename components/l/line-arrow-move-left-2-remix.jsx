import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pacc4ybvb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pacc4ybvb"/>`,
		"fallback": "streamline:line-arrow-move-left-2-remix",
	});
}

export default Component;
