import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufha-lr4w.css';
import '../../css/b/b8c_6kb2a.css';
import '../../css/s/s-yk1ybji.css';
import '../../css/r/rw9bz4l2k.css';
import '../../css/c/c2ou-ccrs.css';
import '../../css/m/mi-feccmc.css';
import '../../css/q/q1q75-b-j.css';
import '../../css/l/lv50mhd_y.css';
import '../../css/p/pc2n2-bgb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufha-lr4w"/><path class="b8c_6kb2a"/><path class="s-yk1ybji"/><path class="rw9bz4l2k"/><path class="c2ou-ccrs"/><path class="mi-feccmc"/><path class="q1q75-b-j"/><path class="lv50mhd_y"/><path class="pc2n2-bgb"/>`,
		"fallback": "fxemoji:tophat",
	});
}

export default Component;
