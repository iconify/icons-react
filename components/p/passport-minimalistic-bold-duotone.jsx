import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etxhcrbpc.css';
import '../../css/i/if816nbxh.css';
import '../../css/s/sj3u3hrzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="etxhcrbpc"/><path clip-rule="evenodd" class="if816nbxh"/><path class="sj3u3hrzd"/></g>`,
		"fallback": "solar:passport-minimalistic-bold-duotone",
	});
}

export default Component;
