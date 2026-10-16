import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajyu9s76q.css';
import '../../css/p/porjtp6kr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajyu9s76q"/><path class="porjtp6kr"/>`,
		"fallback": "energy-icons:message-alert-20-bold",
	});
}

export default Component;
