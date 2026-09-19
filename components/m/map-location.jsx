import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrcm8ibqt.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrcm8ibqt"/>`,
		"fallback": "fa6-solid:map-location",
	});
}

export default Component;
