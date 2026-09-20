import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xln1ps8-f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xln1ps8-f"/>`,
		"fallback": "raphael:train",
	});
}

export default Component;
