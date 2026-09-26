import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yc1eq-awn.css';
import '../../css/v/vbwan82rd.css';
import '../../css/a/alf7g0r-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yc1eq-awn"/><path class="vbwan82rd"/><path class="alf7g0r-x"/></g>`,
		"fallback": "solar:panel-left-open-line-duotone",
	});
}

export default Component;
