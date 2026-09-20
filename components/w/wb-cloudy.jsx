import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je79ww9ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je79ww9ik"/>`,
		"fallback": "mdi:wb-cloudy",
	});
}

export default Component;
