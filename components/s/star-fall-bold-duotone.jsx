import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zp1uips8u.css';
import '../../css/c/crncc80ou.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/z29w3hbal.css';
import '../../css/s/sbj_083-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zp1uips8u"/><path class="crncc80ou"/><g class="mc2zb0bvp"><path class="z29w3hbal"/><path class="sbj_083-e"/></g></g>`,
		"fallback": "solar:star-fall-bold-duotone",
	});
}

export default Component;
