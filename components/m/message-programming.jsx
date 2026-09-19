import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/k-eyngw_k.css';
import '../../css/a/aj0cejbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="k-eyngw_k"/><path class="aj0cejbxj"/></g>`,
		"fallback": "hugeicons:message-programming",
	});
}

export default Component;
