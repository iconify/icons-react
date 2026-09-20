import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kebp8vbig.css';
import '../../css/s/s-ypsc2gv.css';
import '../../css/j/j-85zuh7n.css';
import '../../css/m/mhih08bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kebp8vbig"/><path class="s-ypsc2gv"/><path class="j-85zuh7n"/><path class="mhih08bzt"/></g>`,
		"fallback": "solar:palette-round-line-duotone",
	});
}

export default Component;
