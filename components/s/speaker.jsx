import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1dt8jrog.css';

const viewBox = {"width":304,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1dt8jrog"/>`,
		"fallback": "zmdi:speaker",
	});
}

export default Component;
