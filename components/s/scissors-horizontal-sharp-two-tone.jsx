import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t5_43f5jw.css';
import '../../css/j/j8itey4it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t5_43f5jw"/><path class="j8itey4it"/></g>`,
		"fallback": "keyline-icons:scissors-horizontal-sharp-two-tone",
	});
}

export default Component;
