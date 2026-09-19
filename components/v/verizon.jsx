import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnqvnfb_q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnqvnfb_q"/>`,
		"fallback": "cib:verizon",
	});
}

export default Component;
