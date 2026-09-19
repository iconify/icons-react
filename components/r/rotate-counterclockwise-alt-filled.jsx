import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gztstl2_u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gztstl2_u"/>`,
		"fallback": "carbon:rotate-counterclockwise-alt-filled",
	});
}

export default Component;
