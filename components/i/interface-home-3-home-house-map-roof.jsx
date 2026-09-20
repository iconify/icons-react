import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwfth1zvb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwfth1zvb"/>`,
		"fallback": "streamline:interface-home-3-home-house-map-roof",
	});
}

export default Component;
