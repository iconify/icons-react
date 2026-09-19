import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/g/gnng3obxz.css';
import '../../css/p/pzze8cbzr.css';
import '../../css/u/ue5su15bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="m4l-9ybuj"/><path class="gnng3obxz"/><path class="pzze8cbzr"/><path class="ue5su15bf"/></g>`,
		"fallback": "hugeicons:loader-pinwheel",
	});
}

export default Component;
