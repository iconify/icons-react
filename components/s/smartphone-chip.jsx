import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z66ejdseq.css';
import '../../css/q/q_arwwt1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z66ejdseq"/><path class="q_arwwt1u"/></g>`,
		"fallback": "gg:smartphone-chip",
	});
}

export default Component;
