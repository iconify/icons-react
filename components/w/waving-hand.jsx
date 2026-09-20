import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vc74_bcjd.css';
import '../../css/l/l953_nejt.css';
import '../../css/r/rbskpge7o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vc74_bcjd"/><path class="l953_nejt"/><path class="rbskpge7o"/></g>`,
		"fallback": "streamline-color:waving-hand",
	});
}

export default Component;
