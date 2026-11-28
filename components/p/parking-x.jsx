import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4wixbk7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4wixbk7u"/>`,
		"fallback": "noviair:parking-x",
	});
}

export default Component;
