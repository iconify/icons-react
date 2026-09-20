import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v8hgvi38z.css';
import '../../css/s/sl-5f5bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v8hgvi38z"/><path class="sl-5f5bej"/></g>`,
		"fallback": "keyline-icons:square-chevron-down-sharp-duotone",
	});
}

export default Component;
