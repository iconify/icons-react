import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r2jxn3bxo.css';
import '../../css/b/brroavbfx.css';
import '../../css/c/cl09nonwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="r2jxn3bxo"/><path clip-rule="evenodd" class="brroavbfx"/><path class="cl09nonwk"/></g>`,
		"fallback": "keyline-icons:sofa-sharp-duotone",
	});
}

export default Component;
