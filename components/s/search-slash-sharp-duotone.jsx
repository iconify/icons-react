import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k79gm2b1n.css';
import '../../css/r/r-caui8xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k79gm2b1n"/><path class="r-caui8xe"/></g>`,
		"fallback": "keyline-icons:search-slash-sharp-duotone",
	});
}

export default Component;
