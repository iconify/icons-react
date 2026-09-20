import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qp2yl-boj.css';
import '../../css/o/op1b_pk_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qp2yl-boj"/><path class="op1b_pk_a"/></g>`,
		"fallback": "streamline-sharp:phone-circle-off-solid",
	});
}

export default Component;
