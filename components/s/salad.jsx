import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk7qj8b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk7qj8b2i"/>`,
		"fallback": "vadivam:salad",
	});
}

export default Component;
