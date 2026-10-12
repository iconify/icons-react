import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1py5sbic.css';
import '../../css/z/zp31fuvqj.css';
import '../../css/z/zt_648yqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k1py5sbic"/><path class="zp31fuvqj"/><path class="zt_648yqm"/></g>`,
		"fallback": "lucide-extended:nut-duotone",
	});
}

export default Component;
