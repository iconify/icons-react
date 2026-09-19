import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_fmg342a.css';
import '../../css/w/wvmwq-yxg.css';
import '../../css/u/ua-ukmbpm.css';
import '../../css/c/c019ivbij.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f_fmg342a"/><path clip-rule="evenodd" class="wvmwq-yxg"/><path class="ua-ukmbpm"/><path clip-rule="evenodd" class="c019ivbij"/></g>`,
		"fallback": "glyphs:race-car-outline",
	});
}

export default Component;
