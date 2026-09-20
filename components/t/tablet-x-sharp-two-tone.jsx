import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e-veehbyi.css';
import '../../css/m/mna5f5hog.css';
import '../../css/h/h1a-_zb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e-veehbyi"/><path class="mna5f5hog"/><path class="h1a-_zb3n"/></g>`,
		"fallback": "keyline-icons:tablet-x-sharp-two-tone",
	});
}

export default Component;
