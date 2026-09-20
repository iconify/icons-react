import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neqi2zbmx.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neqi2zbmx"/>`,
		"fallback": "lineicons:rupee",
	});
}

export default Component;
