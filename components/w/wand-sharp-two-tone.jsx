import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gxsd7jucs.css';
import '../../css/y/yrcm1ibvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gxsd7jucs"/><path class="yrcm1ibvg"/></g>`,
		"fallback": "keyline-icons:wand-sharp-two-tone",
	});
}

export default Component;
