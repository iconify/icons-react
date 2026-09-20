import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pipuo_b0d.css';
import '../../css/r/r1_5jubgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pipuo_b0d"/><path class="r1_5jubgn"/></g>`,
		"fallback": "keyline-icons:repeat-sharp-duotone",
	});
}

export default Component;
