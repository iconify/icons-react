import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x3fjdqojm.css';
import '../../css/p/pspnvdo9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x3fjdqojm"/><path class="pspnvdo9o"/></g>`,
		"fallback": "keyline-icons:sunrise-sharp-two-tone",
	});
}

export default Component;
