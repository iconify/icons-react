import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njuu40vwh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njuu40vwh"/>`,
		"fallback": "la:stack-overflow",
	});
}

export default Component;
