import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zzgumwbxx.css';
import '../../css/h/hkcj5-bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zzgumwbxx"/><path class="hkcj5-bst wm-a"/></g>`,
		"fallback": "withicons:smartphone",
	});
}

export default Component;
