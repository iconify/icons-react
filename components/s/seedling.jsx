import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_w3tcb-o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_w3tcb-o"/>`,
		"fallback": "dinkie-icons:seedling",
	});
}

export default Component;
