import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-vg6lr_s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-vg6lr_s"/>`,
		"fallback": "energy-icons:message-20-bold",
	});
}

export default Component;
