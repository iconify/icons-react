import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a2mdmq54f.css';
import '../../css/p/p-dxndbyh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a2mdmq54f"/><path class="p-dxndbyh"/></g>`,
		"fallback": "fad:save",
	});
}

export default Component;
