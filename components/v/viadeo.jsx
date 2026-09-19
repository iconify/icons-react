import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m46mg6mre.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m46mg6mre"/>`,
		"fallback": "fa-brands:viadeo",
	});
}

export default Component;
