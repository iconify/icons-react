import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tpfdgiz5d.css';
import '../../css/a/a1zx_pbxi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tpfdgiz5d"/><path class="a1zx_pbxi"/></g>`,
		"fallback": "pepicons-pencil:paperclip",
	});
}

export default Component;
