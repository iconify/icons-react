import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i136uxxwb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i136uxxwb"/>`,
		"fallback": "raphael:piechart",
	});
}

export default Component;
