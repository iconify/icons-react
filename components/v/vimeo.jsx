import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy_j5wugz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy_j5wugz"/>`,
		"fallback": "fa-brands:vimeo",
	});
}

export default Component;
