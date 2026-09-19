import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb0msfbvw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb0msfbvw"/>`,
		"fallback": "fa6-brands:square-web-awesome",
	});
}

export default Component;
