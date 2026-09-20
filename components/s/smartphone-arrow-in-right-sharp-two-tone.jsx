import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/ctkwnzbjp.css';
import '../../css/x/x4o54wz-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ctkwnzbjp"/><path class="x4o54wz-w"/></g>`,
		"fallback": "keyline-icons:smartphone-arrow-in-right-sharp-two-tone",
	});
}

export default Component;
