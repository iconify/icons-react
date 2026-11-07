import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxgoffwmm.css';
import '../../css/y/ywojd67ji.css';
import '../../css/k/khsdxy-1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxgoffwmm"/><path class="ywojd67ji"/><path class="khsdxy-1o"/>`,
		"fallback": "solar:menu-dots-bold-duotone",
	});
}

export default Component;
