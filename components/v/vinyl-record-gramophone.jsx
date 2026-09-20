import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u2t3oi7_s.css';
import '../../css/p/pjsmy4bcc.css';
import '../../css/q/q8ta_qbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u2t3oi7_s"/><path class="pjsmy4bcc"/><path class="q8ta_qbdd"/></g>`,
		"fallback": "streamline-freehand:vinyl-record-gramophone",
	});
}

export default Component;
