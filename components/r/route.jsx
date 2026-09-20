import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa5sfhb_x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa5sfhb_x"/>`,
		"fallback": "la:route",
	});
}

export default Component;
