import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne34-2bro.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne34-2bro"/>`,
		"fallback": "dinkie-icons:uni54c8-box",
	});
}

export default Component;
