import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bog5uq61v.css';
import '../../css/m/mx20ewrdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bog5uq61v"/><path class="mx20ewrdo"/></g>`,
		"fallback": "hugeicons:virtual-reality-vr-01",
	});
}

export default Component;
