import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cc50cvs0o.css';
import '../../css/x/xw4_qbbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cc50cvs0o"/><path class="xw4_qbbkq"/></g>`,
		"fallback": "keyline-icons:square-arrow-left",
	});
}

export default Component;
