import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a6bdxlbfp.css';
import '../../css/g/gawr9cban.css';
import '../../css/z/zzgumwbxx.css';
import '../../css/a/acmuaibfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a6bdxlbfp wm-k"/><path class="gawr9cban wm-shadow"/><path class="wm-k zzgumwbxx"/><path class="acmuaibfy wm-s"/></g>`,
		"fallback": "withicons:smartphone-charging-engrave",
	});
}

export default Component;
