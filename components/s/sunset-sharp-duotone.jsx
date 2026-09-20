import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e7-h1bcnv.css';
import '../../css/k/k63snkbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e7-h1bcnv"/><path class="k63snkbau"/></g>`,
		"fallback": "keyline-icons:sunset-sharp-duotone",
	});
}

export default Component;
