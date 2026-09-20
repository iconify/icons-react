import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qc-apv10r.css';
import '../../css/n/n4byf3-kh.css';
import '../../css/s/spbi7bcof.css';
import '../../css/t/tdapwmbfy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qc-apv10r"/><path class="n4byf3-kh"/><path class="spbi7bcof"/><path class="tdapwmbfy"/></g>`,
		"fallback": "pepicons-pencil:seedling",
	});
}

export default Component;
