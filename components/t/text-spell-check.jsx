import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8zr9qcqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8zr9qcqp"/>`,
		"fallback": "andrsrxn:text-spell-check",
	});
}

export default Component;
