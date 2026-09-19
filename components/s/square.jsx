import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd27rseip.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd27rseip"/>`,
		"fallback": "fa-regular:square",
	});
}

export default Component;
