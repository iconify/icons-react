import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cz_z1cc6d.css';
import '../../css/r/rtk3dzcau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cz_z1cc6d"/><path class="rtk3dzcau"/></g>`,
		"fallback": "heroicons:newspaper-solid",
	});
}

export default Component;
