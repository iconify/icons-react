import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n39z9fd7s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n39z9fd7s"/>`,
		"fallback": "cib:overcast",
	});
}

export default Component;
