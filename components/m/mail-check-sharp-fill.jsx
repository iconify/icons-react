import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hrwa_z-6s.css';
import '../../css/x/xizvq4bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hrwa_z-6s"/><path class="xizvq4bha"/></g>`,
		"fallback": "keyline-icons:mail-check-sharp-fill",
	});
}

export default Component;
