import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mxxxmyjfa.css';
import '../../css/x/xj32xhtuu.css';
import '../../css/z/zhvylkbbv.css';
import '../../css/x/xl6_0y5df.css';
import '../../css/l/lnf7riapf.css';
import '../../css/v/vsng8ubjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mxxxmyjfa"/><path class="xj32xhtuu"/><path class="zhvylkbbv"/><path class="xl6_0y5df"/><path class="lnf7riapf"/><path class="vsng8ubjr"/></g>`,
		"fallback": "solar:user-id-bold-duotone",
	});
}

export default Component;
