import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3k4ivb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3k4ivb8s"/>`,
		"fallback": "uil:linkedin-alt",
	});
}

export default Component;
