import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gipyp_0-p.css';
import '../../css/z/z_reqjbtp.css';
import '../../css/m/m9hxvkhgr.css';
import '../../css/q/q0i3y0d1k.css';
import '../../css/c/cb_2hhwip.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gipyp_0-p"/><path class="z_reqjbtp"/><path class="m9hxvkhgr"/><path class="q0i3y0d1k"/><path class="cb_2hhwip"/>`,
		"fallback": "tabler-flags:saudi-arabia",
	});
}

export default Component;
