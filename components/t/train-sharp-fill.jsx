import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mfuhg6upf.css';
import '../../css/b/blri9wbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mfuhg6upf"/><path class="blri9wbom"/></g>`,
		"fallback": "keyline-icons:train-sharp-fill",
	});
}

export default Component;
