import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feo0r_n-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feo0r_n-i"/>`,
		"fallback": "mdi:thumbs-up-down",
	});
}

export default Component;
