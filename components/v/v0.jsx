import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlyr80z1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlyr80z1s"/>`,
		"fallback": "simple-icons:v0",
	});
}

export default Component;
