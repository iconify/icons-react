import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp8hlbcad.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp8hlbcad"/>`,
		"fallback": "fa6-solid:oil-well",
	});
}

export default Component;
