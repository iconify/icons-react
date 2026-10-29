import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cdh-j4bgg.css';
import '../../css/a/acmuaibfy.css';
import '../../css/z/zzgumwbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cdh-j4bgg"/><path class="acmuaibfy wm-s"/><path class="zzgumwbxx"/></g>`,
		"fallback": "withicons:smartphone-charging-duo",
	});
}

export default Component;
