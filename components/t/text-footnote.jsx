import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0v0s9b_d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0v0s9b_d"/>`,
		"fallback": "carbon:text-footnote",
	});
}

export default Component;
