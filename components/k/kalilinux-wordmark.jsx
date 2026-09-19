import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecq0xnbrm.css';
import '../../css/l/laptyg_6p.css';
import '../../css/n/nmtf4hhbz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<filter id="SVGQZbgxPcv" width="1.137" height="1.27" x="-.069" y="-.135" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="7.49"/></filter><path filter="url(#SVGQZbgxPcv)" transform="translate(75.053 41.52)scale(.08238)" class="ecq0xnbrm"/><path class="laptyg_6p"/><path class="nmtf4hhbz"/>`,
		"fallback": "devicon:kalilinux-wordmark",
	});
}

export default Component;
