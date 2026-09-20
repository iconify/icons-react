import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaax8ab6n.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaax8ab6n"/>`,
		"fallback": "picon:rat",
	});
}

export default Component;
