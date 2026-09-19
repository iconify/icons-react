import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd3i9yb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd3i9yb4a"/>`,
		"fallback": "bx:vial",
	});
}

export default Component;
