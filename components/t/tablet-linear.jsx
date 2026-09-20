import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dv-s3ccgy.css';
import '../../css/i/i-vmawbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dv-s3ccgy"/><path class="i-vmawbvn"/></g>`,
		"fallback": "solar:tablet-linear",
	});
}

export default Component;
