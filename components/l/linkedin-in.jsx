import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2r06bb8l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2r06bb8l"/>`,
		"fallback": "cib:linkedin-in",
	});
}

export default Component;
