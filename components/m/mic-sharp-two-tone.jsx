import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gz-8zybbv.css';
import '../../css/j/jkg_acc2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gz-8zybbv"/><path class="jkg_acc2e"/></g>`,
		"fallback": "keyline-icons:mic-sharp-two-tone",
	});
}

export default Component;
