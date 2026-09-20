import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra7z8eb0k.css';
import '../../css/j/j_3_1xjnx.css';
import '../../css/m/mno0o_bwq.css';
import '../../css/b/bmqf4y-5r.css';
import '../../css/g/ge8snfgdk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra7z8eb0k"/><path class="j_3_1xjnx"/><linearGradient id="SVGPOCrKcoz" x1="-20.434" x2="453.204" y1="80.221" y2="553.859" gradientUnits="userSpaceOnUse"><stop offset="0" class="mno0o_bwq"/><stop offset="1" class="bmqf4y-5r"/></linearGradient><path fill="url(#SVGPOCrKcoz)" class="ge8snfgdk"/>`,
		"fallback": "selfhst:ontime-light",
	});
}

export default Component;
