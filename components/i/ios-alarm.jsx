import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmi-16b0h.css';
import '../../css/l/l544h_tbr.css';
import '../../css/l/l-m2k2bsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmi-16b0h"/><path class="l544h_tbr"/><g><path class="l-m2k2bsw"/></g>`,
		"fallback": "ion:ios-alarm",
	});
}

export default Component;
