import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/so-kyjbpx.css';
import '../../css/f/fq2vfgfhg.css';
import '../../css/m/m-0j5bclz.css';
import '../../css/g/gzr_n4aup.css';
import '../../css/p/po5iaqb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="so-kyjbpx"/><path class="fq2vfgfhg"/><path class="m-0j5bclz"/><path class="gzr_n4aup"/><path class="po5iaqb0z"/></g>`,
		"fallback": "solar:paw-bold-duotone",
	});
}

export default Component;
