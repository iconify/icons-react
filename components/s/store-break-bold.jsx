import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hj5j09hsj.css';
import '../../css/q/qh-l8ebjf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hj5j09hsj"/><path class="qh-l8ebjf"/></g>`,
		"fallback": "glyphs:store-break-bold",
	});
}

export default Component;
