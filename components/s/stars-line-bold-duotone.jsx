import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lez1zredg.css';
import '../../css/m/m0h0ptnxz.css';
import '../../css/h/httstt_8v.css';
import '../../css/w/w9a3f6bcy.css';
import '../../css/x/xtz6tjetj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lez1zredg"/><path class="m0h0ptnxz"/><g clip-rule="evenodd" class="httstt_8v"><path class="w9a3f6bcy"/><path class="xtz6tjetj"/></g></g>`,
		"fallback": "solar:stars-line-bold-duotone",
	});
}

export default Component;
