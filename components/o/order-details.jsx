import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrcs4ql7k.css';
import '../../css/p/pfm1z1-ik.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrcs4ql7k"/><path class="pfm1z1-ik"/>`,
		"fallback": "carbon:order-details",
	});
}

export default Component;
