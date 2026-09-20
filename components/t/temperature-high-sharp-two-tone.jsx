import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dw9a-gbpb.css';
import '../../css/n/nw2wqtb4e.css';
import '../../css/u/u8_q54bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dw9a-gbpb"/><path class="nw2wqtb4e"/><path class="u8_q54bsb"/></g>`,
		"fallback": "keyline-icons:temperature-high-sharp-two-tone",
	});
}

export default Component;
