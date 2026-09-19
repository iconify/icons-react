import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljj7i8b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljj7i8b3n"/>`,
		"fallback": "griddy-icons:toaster",
	});
}

export default Component;
