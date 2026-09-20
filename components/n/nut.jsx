import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yijdt7qhd.css';
import '../../css/k/ku1ne0hlw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yijdt7qhd"/><path class="ku1ne0hlw"/></g>`,
		"fallback": "pepicons-pencil:nut",
	});
}

export default Component;
