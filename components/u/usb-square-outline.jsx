import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ip7gl-bja.css';
import '../../css/h/htiiohb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ip7gl-bja"/><path class="htiiohb4m"/></g>`,
		"fallback": "solar:usb-square-outline",
	});
}

export default Component;
