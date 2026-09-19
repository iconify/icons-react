import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw95eob7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw95eob7v"/>`,
		"fallback": "heroicons:magnifying-glass-minus",
	});
}

export default Component;
