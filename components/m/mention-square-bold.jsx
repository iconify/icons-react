import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp6su4bex.css';
import '../../css/o/ogcp94bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp6su4bex"/><path clip-rule="evenodd" class="ogcp94bfh"/>`,
		"fallback": "solar:mention-square-bold",
	});
}

export default Component;
