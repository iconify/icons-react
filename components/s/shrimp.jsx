import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww5e5e7-f.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww5e5e7-f"/>`,
		"fallback": "picon:shrimp",
	});
}

export default Component;
