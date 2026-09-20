import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fu0daqcgv.css';
import '../../css/t/tnj11zbtt.css';
import '../../css/i/i-jb43rcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="fu0daqcgv"/><path class="tnj11zbtt"/><path class="i-jb43rcz"/></g>`,
		"fallback": "thesvg-color:nimoxis",
	});
}

export default Component;
