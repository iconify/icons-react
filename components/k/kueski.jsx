import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx2bpsb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx2bpsb9u"/>`,
		"fallback": "simple-icons:kueski",
	});
}

export default Component;
