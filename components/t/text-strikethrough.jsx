import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s2vb2v_5q.css';
import '../../css/x/xdkgjyn9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s2vb2v_5q"/><path class="xdkgjyn9q"/></g>`,
		"fallback": "hugeicons:text-strikethrough",
	});
}

export default Component;
