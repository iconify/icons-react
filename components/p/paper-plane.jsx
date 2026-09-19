import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffzimobwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffzimobwk"/>`,
		"fallback": "fa6-regular:paper-plane",
	});
}

export default Component;
