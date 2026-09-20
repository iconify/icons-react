import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw4w6t9by.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw4w6t9by"/>`,
		"fallback": "picon:water",
	});
}

export default Component;
