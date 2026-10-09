import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2ygvf42v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2ygvf42v"/>`,
		"fallback": "energy-icons:message-20",
	});
}

export default Component;
