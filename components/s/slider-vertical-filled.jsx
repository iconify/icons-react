import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp00vd57h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp00vd57h"/>`,
		"fallback": "reicon:slider-vertical-filled",
	});
}

export default Component;
