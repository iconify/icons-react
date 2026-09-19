import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/leopelbhl.css';
import '../../css/l/ltc-69bax.css';
import '../../css/k/kltcracbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="leopelbhl"/><path class="ltc-69bax"/><path class="kltcracbk"/></g>`,
		"fallback": "healthicons:sweating-outline-24px",
	});
}

export default Component;
