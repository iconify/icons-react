import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n9ycfgbml.css';
import '../../css/d/drb1r_bnp.css';
import '../../css/k/ktmbf04te.css';
import '../../css/t/t1kem48fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n9ycfgbml wm-k"/><path class="drb1r_bnp wm-a"/><path class="ktmbf04te wm-k"/><path class="t1kem48fi wm-a"/></g>`,
		"fallback": "withicons:superscript-sketch",
	});
}

export default Component;
