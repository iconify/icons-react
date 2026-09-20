import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb-4ft_ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb-4ft_ay"/>`,
		"fallback": "mdi:vector-bezier",
	});
}

export default Component;
