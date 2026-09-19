import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hygzc7f2b.css';
import '../../css/d/dxvxrfbem.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hygzc7f2b"/><path class="dxvxrfbem"/></g>`,
		"fallback": "fad:logo-vst",
	});
}

export default Component;
