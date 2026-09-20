import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/fznb90gae.css';
import '../../css/h/h3xk7ebgr.css';
import '../../css/s/slj-q6j2r.css';
import '../../css/p/pn1ky7q8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="fznb90gae"/><path class="h3xk7ebgr"/><path class="slj-q6j2r"/><path class="pn1ky7q8e"/></g>`,
		"fallback": "lets-icons:refresh-2",
	});
}

export default Component;
