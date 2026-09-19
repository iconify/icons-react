import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/slc6phqwc.css';
import '../../css/o/o7b_fwbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="slc6phqwc"/><path class="o7b_fwbxp"/></g>`,
		"fallback": "akar-icons:open-envelope",
	});
}

export default Component;
