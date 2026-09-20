import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snc3imbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="snc3imbwn"/>`,
		"fallback": "solar:smartphone-outline",
	});
}

export default Component;
