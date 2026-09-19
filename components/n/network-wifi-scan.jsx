import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd1j9ig9o.css';

const viewBox = {"width":512,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd1j9ig9o"/>`,
		"fallback": "zmdi:network-wifi-scan",
	});
}

export default Component;
