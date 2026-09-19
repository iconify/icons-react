import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs-8xlbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs-8xlbim"/>`,
		"fallback": "eva:smartphone-fill",
	});
}

export default Component;
