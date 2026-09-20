import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi41mr-8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi41mr-8a"/>`,
		"fallback": "solar:volleyball-2-linear",
	});
}

export default Component;
