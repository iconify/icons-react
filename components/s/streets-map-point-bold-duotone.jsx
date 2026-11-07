import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-2fhubal.css';
import '../../css/n/n6lshjbtf.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/ktlliubjd.css';
import '../../css/w/wl85dh_jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-2fhubal"/><path class="n6lshjbtf"/><g class="xtpeb-edw"><path class="ktlliubjd"/><path class="wl85dh_jk"/></g>`,
		"fallback": "solar:streets-map-point-bold-duotone",
	});
}

export default Component;
