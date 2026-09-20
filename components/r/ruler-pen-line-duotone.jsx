import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hgrm2rbfz.css';
import '../../css/t/tnnk9dqhq.css';
import '../../css/s/sjq--8btf.css';
import '../../css/h/h-mw_xb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hgrm2rbfz"/><path class="tnnk9dqhq"/><path class="sjq--8btf"/><path class="h-mw_xb8f"/></g>`,
		"fallback": "solar:ruler-pen-line-duotone",
	});
}

export default Component;
