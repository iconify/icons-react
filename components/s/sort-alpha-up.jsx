import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od52gv09l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od52gv09l"/>`,
		"fallback": "la:sort-alpha-up",
	});
}

export default Component;
