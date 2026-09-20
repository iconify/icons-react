import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ac7wtr7yt.css';
import '../../css/j/j-uvota7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ac7wtr7yt"/><path class="j-uvota7b"/></g>`,
		"fallback": "solar:server-2-bold",
	});
}

export default Component;
