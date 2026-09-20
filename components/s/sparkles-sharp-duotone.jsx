import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dayvb9akf.css';
import '../../css/s/sxfavlbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dayvb9akf"/><path class="sxfavlbce"/></g>`,
		"fallback": "keyline-icons:sparkles-sharp-duotone",
	});
}

export default Component;
