import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qcp732bgp.css';
import '../../css/x/x4f_4xb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qcp732bgp"/><path class="x4f_4xb_z"/></g>`,
		"fallback": "lucide:save-plus",
	});
}

export default Component;
