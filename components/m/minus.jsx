import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1kn-0bbc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1kn-0bbc"/>`,
		"fallback": "icons8:minus",
	});
}

export default Component;
