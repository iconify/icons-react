import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-_n6bcga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-_n6bcga"/>`,
		"fallback": "hugeicons:job-link",
	});
}

export default Component;
