import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4w_49bsg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4w_49bsg"/>`,
		"fallback": "la:vials",
	});
}

export default Component;
