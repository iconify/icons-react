import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s9dzx_b3w.css';
import '../../css/b/ba0j365wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s9dzx_b3w"/><path class="ba0j365wv"/></g>`,
		"fallback": "keyline-icons:message-square-dot-sharp-duotone",
	});
}

export default Component;
