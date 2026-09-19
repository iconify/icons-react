import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ke6pb1bjn.css';
import '../../css/g/gxpdn9-wz.css';
import '../../css/v/vazvq7ahv.css';
import '../../css/r/rcjmc3bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ke6pb1bjn"/><path class="gxpdn9-wz"/><path class="vazvq7ahv"/><path class="rcjmc3bzj"/></g>`,
		"fallback": "iconoir:peace-hand",
	});
}

export default Component;
