import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e10e51b-p.css';
import '../../css/m/m67jodx_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e10e51b-p"/><path class="m67jodx_q"/></g>`,
		"fallback": "reicon:wallet-alt-filled",
	});
}

export default Component;
