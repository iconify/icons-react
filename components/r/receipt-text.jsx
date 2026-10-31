import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hru92mfxt.css';
import '../../css/o/oit8jiddo.css';
import '../../css/a/ap-0grbig.css';
import '../../css/w/wje5iab3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hru92mfxt wm-shadow"/><path class="oit8jiddo wm-shadow"/><path class="ap-0grbig"/><path class="wje5iab3c"/></g>`,
		"fallback": "withicons-brutal:receipt-text",
	});
}

export default Component;
