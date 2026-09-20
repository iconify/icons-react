import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pdflanbnl.css';
import '../../css/d/dsfzr7bxl.css';
import '../../css/t/tvz_dccwk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pdflanbnl"/><path class="dsfzr7bxl"/><path class="tvz_dccwk"/></g>`,
		"fallback": "pepicons-pencil:previous-track",
	});
}

export default Component;
