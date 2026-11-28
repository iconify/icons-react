import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb3c-dh8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb3c-dh8s"/>`,
		"fallback": "iconaut:volume-low-solid",
	});
}

export default Component;
