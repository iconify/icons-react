import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o17j_ibqf.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o17j_ibqf"/>`,
		"fallback": "system-uicons:waves",
	});
}

export default Component;
