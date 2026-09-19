import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rpq-14kgr.css';
import '../../css/c/cfyiqqbvt.css';
import '../../css/m/mw8gmlbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="refresh-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="rpq-14kgr"/><path class="cfyiqqbvt"/><path class="mw8gmlbee"/></g></g>`,
		"fallback": "cuida:refresh-outline",
	});
}

export default Component;
