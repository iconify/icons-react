import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bln9h5d3b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bln9h5d3b"/>`,
		"fallback": "la:itunes",
	});
}

export default Component;
