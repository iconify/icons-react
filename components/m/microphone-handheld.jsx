import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bbt1n2-ga.css';
import '../../css/d/dtgyfrb2h.css';
import '../../css/q/qe_94vbov.css';
import '../../css/r/rpts7tzjm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bbt1n2-ga"/><path class="dtgyfrb2h"/><path class="qe_94vbov"/><path class="rpts7tzjm"/></g>`,
		"fallback": "pepicons-pencil:microphone-handheld",
	});
}

export default Component;
