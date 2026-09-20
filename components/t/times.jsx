import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpq6t6b2a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpq6t6b2a"/>`,
		"fallback": "picon:times",
	});
}

export default Component;
