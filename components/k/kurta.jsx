import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ozmxmubwb.css';
import '../../css/y/y3eow_bqa.css';
import '../../css/v/vv62orbee.css';
import '../../css/z/z-8mnucyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ozmxmubwb"/><path class="y3eow_bqa"/><path class="vv62orbee"/><path class="z-8mnucyr"/></g>`,
		"fallback": "hugeicons:kurta",
	});
}

export default Component;
