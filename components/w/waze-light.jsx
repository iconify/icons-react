import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpg_28bwi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpg_28bwi"/>`,
		"fallback": "selfhst:waze-light",
	});
}

export default Component;
