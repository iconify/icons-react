import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_h2blnbf.css';
import '../../css/m/mx0hxbois.css';
import '../../css/y/y07ft7bnl.css';
import '../../css/h/hwf-m1bzt.css';
import '../../css/z/zy7c6fkpz.css';
import '../../css/q/qgqq8fblv.css';
import '../../css/n/nxr1y1pvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_h2blnbf wm-shadow"/><path class="mx0hxbois wm-k"/><path class="wm-k y07ft7bnl"/><path class="hwf-m1bzt wm-k"/><path class="wm-k zy7c6fkpz"/><path class="qgqq8fblv wm-k"/><path class="nxr1y1pvc wm-shine"/>`,
		"fallback": "withicons-pastel:repeat",
	});
}

export default Component;
