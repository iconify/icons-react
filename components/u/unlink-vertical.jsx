import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d82qtqb-w.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d82qtqb-w"/>`,
		"fallback": "system-uicons:unlink-vertical",
	});
}

export default Component;
