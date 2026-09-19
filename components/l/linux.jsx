import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb3q0tz5h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb3q0tz5h"/>`,
		"fallback": "carbon:linux",
	});
}

export default Component;
