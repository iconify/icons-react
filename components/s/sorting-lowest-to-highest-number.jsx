import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruxfll-hp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruxfll-hp"/>`,
		"fallback": "carbon:sorting-lowest-to-highest-number",
	});
}

export default Component;
