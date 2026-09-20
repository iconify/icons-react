import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pqxgc2o7w.css';
import '../../css/u/uo94s0bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pqxgc2o7w"/><path class="uo94s0bts"/></g>`,
		"fallback": "streamline-freehand:programming-language-browser-html",
	});
}

export default Component;
