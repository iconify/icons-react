import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ry6jasmgp.css';
import '../../css/h/hdt54zzfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ry6jasmgp"/><path clip-rule="evenodd" class="hdt54zzfv"/></g>`,
		"fallback": "reicon:volume-down-duotone",
	});
}

export default Component;
