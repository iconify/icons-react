import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hzcyxbagz.css';
import '../../css/v/vd7qcpqxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hzcyxbagz"/><path class="vd7qcpqxt"/></g>`,
		"fallback": "keyline-icons:shield-sparkles-fill",
	});
}

export default Component;
