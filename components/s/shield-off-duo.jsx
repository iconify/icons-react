import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/whz-6eqqw.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/r/ri2e-qbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="whz-6eqqw"/><path class="qr4ochb5c wm-s"/><path class="ri2e-qbwa"/></g>`,
		"fallback": "withicons:shield-off-duo",
	});
}

export default Component;
