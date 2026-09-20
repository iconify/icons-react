import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyrk4f12c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyrk4f12c"/>`,
		"fallback": "roentgen:massage",
	});
}

export default Component;
