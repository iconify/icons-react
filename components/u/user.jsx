import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7csh6b4e.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7csh6b4e"/>`,
		"fallback": "fa-solid:user",
	});
}

export default Component;
