import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kwkaiub9l.css';
import '../../css/j/jvqu86ygv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kwkaiub9l"/><path class="jvqu86ygv"/></g>`,
		"fallback": "keyline-icons:sun-sharp-fill",
	});
}

export default Component;
