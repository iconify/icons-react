import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnm09wyjz.css';
import '../../css/d/dn3watfcf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rnm09wyjz"/><path clip-rule="evenodd" class="dn3watfcf"/></g>`,
		"fallback": "streamline-color:phone-ringing-1-flat",
	});
}

export default Component;
