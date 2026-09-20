import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hsin36bfa.css';
import '../../css/s/s70npyb2y.css';
import '../../css/f/flvpi11cb.css';
import '../../css/v/v-j6y-zzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hsin36bfa"/><path class="s70npyb2y"/><path class="flvpi11cb"/><path class="v-j6y-zzv"/></g>`,
		"fallback": "solar:link-broken-minimalistic-outline",
	});
}

export default Component;
