import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/acqjfdcvr.css';
import '../../css/z/z-h1h7bwg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="acqjfdcvr"/><path class="z-h1h7bwg"/></g>`,
		"fallback": "pepicons-pencil:pinpoint",
	});
}

export default Component;
