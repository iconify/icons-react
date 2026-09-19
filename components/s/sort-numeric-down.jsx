import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj9qppsak.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj9qppsak"/>`,
		"fallback": "cil:sort-numeric-down",
	});
}

export default Component;
