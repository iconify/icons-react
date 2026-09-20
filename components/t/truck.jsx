import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm7z24m1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm7z24m1h"/>`,
		"fallback": "ix:truck",
	});
}

export default Component;
