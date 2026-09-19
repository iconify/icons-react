import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw90tlbrb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw90tlbrb"/>`,
		"fallback": "cib:javascript",
	});
}

export default Component;
