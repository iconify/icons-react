import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s-hu2mbef.css';
import '../../css/v/vilhzscue.css';
import '../../css/p/pcromnbas.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/z/zpu53zwhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="s-hu2mbef"/><path class="vilhzscue"/><path class="pcromnbas wm-shine"/><path class="l9lv5_bcf wm-k"/><path class="wm-a zpu53zwhs"/></g>`,
		"fallback": "withicons-kawaii:scan-face",
	});
}

export default Component;
