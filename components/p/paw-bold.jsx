import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/of1pldrdd.css';
import '../../css/s/so-kyjbpx.css';
import '../../css/f/fq2vfgfhg.css';
import '../../css/m/m-0j5bclz.css';
import '../../css/g/gzr_n4aup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="of1pldrdd"/><path class="so-kyjbpx"/><path class="fq2vfgfhg"/><path class="m-0j5bclz"/><path class="gzr_n4aup"/></g>`,
		"fallback": "solar:paw-bold",
	});
}

export default Component;
