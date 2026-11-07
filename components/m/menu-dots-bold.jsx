import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxgoffwmm.css';
import '../../css/m/m5-5o8s_j.css';
import '../../css/y/ywojd67ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxgoffwmm"/><path class="m5-5o8s_j"/><path class="ywojd67ji"/>`,
		"fallback": "solar:menu-dots-bold",
	});
}

export default Component;
