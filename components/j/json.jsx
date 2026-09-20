import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioxb8ywse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioxb8ywse"/>`,
		"fallback": "lets-icons:json",
	});
}

export default Component;
