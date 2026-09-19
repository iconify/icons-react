import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo7nucb8d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo7nucb8d"/>`,
		"fallback": "cib:qualcomm",
	});
}

export default Component;
