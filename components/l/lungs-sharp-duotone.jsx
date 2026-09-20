import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/edgm8ib5o.css';
import '../../css/i/iuloo90nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="edgm8ib5o"/><path class="iuloo90nw"/></g>`,
		"fallback": "keyline-icons:lungs-sharp-duotone",
	});
}

export default Component;
