import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybtsdob7h.css';
import '../../css/z/zshnxy2ju.css';
import '../../css/m/mfp2v-4hr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ybtsdob7h"/><path class="zshnxy2ju"/><path class="mfp2v-4hr"/></g>`,
		"fallback": "solar:stream-bold-duotone",
	});
}

export default Component;
