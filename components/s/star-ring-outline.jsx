import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mwi3efbrh.css';
import '../../css/t/thiuyq2lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mwi3efbrh"/><path class="thiuyq2lo"/></g>`,
		"fallback": "solar:star-ring-outline",
	});
}

export default Component;
