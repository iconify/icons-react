import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wun8kyb2z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wun8kyb2z"/>`,
		"fallback": "picon:rtl",
	});
}

export default Component;
