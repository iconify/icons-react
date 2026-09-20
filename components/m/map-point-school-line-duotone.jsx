import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hjvhm_iif.css';
import '../../css/d/d0tglh60a.css';
import '../../css/t/toskudjye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hjvhm_iif"/><path class="d0tglh60a"/><path class="toskudjye"/></g>`,
		"fallback": "solar:map-point-school-line-duotone",
	});
}

export default Component;
