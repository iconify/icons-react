import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/ueui13bly.css';
import '../../css/d/dotp_lcwf.css';
import '../../css/e/ewnktgm_c.css';
import '../../css/f/fxuxdpbto.css';
import '../../css/t/tmv_7fbjr.css';
import '../../css/z/zjtfa5btv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ueui13bly"/><path class="dotp_lcwf"/><path class="ewnktgm_c"/><path class="fxuxdpbto"/><path class="tmv_7fbjr"/><path class="zjtfa5btv"/></g>`,
		"fallback": "streamline-plump-color:paint-bucket",
	});
}

export default Component;
