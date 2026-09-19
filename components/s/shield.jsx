import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4ai7ccjw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4ai7ccjw"/>`,
		"fallback": "dinkie-icons:shield",
	});
}

export default Component;
