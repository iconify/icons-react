import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dv-s3ccgy.css';
import '../../css/j/jllfi1b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dv-s3ccgy"/><path class="jllfi1b7i"/></g>`,
		"fallback": "solar:tablet-line-duotone",
	});
}

export default Component;
