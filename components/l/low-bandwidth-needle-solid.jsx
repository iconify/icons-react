import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmv4wkb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmv4wkb5o"/>`,
		"fallback": "iconaut:low-bandwidth-needle-solid",
	});
}

export default Component;
