import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k92lh5ecq.css';
import '../../css/h/hbediwb_x.css';
import '../../css/z/zzj0jng0s.css';
import '../../css/n/nc8mhbb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k92lh5ecq"/><path clip-rule="evenodd" class="hbediwb_x"/><path class="zzj0jng0s"/><path clip-rule="evenodd" class="nc8mhbb1f"/></g>`,
		"fallback": "solar:virus-outline",
	});
}

export default Component;
