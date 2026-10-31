import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vszc_mbbq.css';
import '../../css/l/l3g0p0bwu.css';
import '../../css/k/k72_kgm1o.css';
import '../../css/y/yj_y3dp7d.css';
import '../../css/f/f48qsgb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vszc_mbbq"/><path class="l3g0p0bwu"/><path class="k72_kgm1o wm-shine"/><path class="wm-k yj_y3dp7d"/><path class="f48qsgb5t wm-a"/></g>`,
		"fallback": "withicons-kawaii:vault",
	});
}

export default Component;
