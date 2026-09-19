import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezwwaubim.css';
import '../../css/i/ij_fhvbsj.css';
import '../../css/y/ywutn4bbr.css';
import '../../css/t/taozkpnwj.css';
import '../../css/e/enleh8bwz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ezwwaubim"/><path class="ij_fhvbsj"/><path class="ywutn4bbr"/><path class="taozkpnwj"/><path class="enleh8bwz"/></g>`,
		"fallback": "glyphs-poly:repeat-once",
	});
}

export default Component;
