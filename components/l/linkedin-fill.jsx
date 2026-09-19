import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg7j1hkpt.css';
import '../../css/y/y1ghfdd7v.css';
import '../../css/w/w3nzclc_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg7j1hkpt"/><rect class="y1ghfdd7v"/><circle class="w3nzclc_r"/>`,
		"fallback": "eva:linkedin-fill",
	});
}

export default Component;
