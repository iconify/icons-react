import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r1429rggm.css';
import '../../css/r/rf0a42bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r1429rggm"/><path class="rf0a42bhh"/></g>`,
		"fallback": "solar:paperclip-2-line-duotone",
	});
}

export default Component;
