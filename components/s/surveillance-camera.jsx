import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lpbby968v.css';
import '../../css/v/vs3v465nz.css';
import '../../css/e/e1nk3pf1p.css';
import '../../css/h/hj54-kbnv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lpbby968v"/><path class="vs3v465nz"/><path class="e1nk3pf1p"/><path class="hj54-kbnv"/></g>`,
		"fallback": "streamline-flex-color:surveillance-camera",
	});
}

export default Component;
