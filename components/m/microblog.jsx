import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjt944sev.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjt944sev"/>`,
		"fallback": "fa-brands:microblog",
	});
}

export default Component;
