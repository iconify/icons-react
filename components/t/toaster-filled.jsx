import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs_kyl4fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs_kyl4fj"/>`,
		"fallback": "griddy-icons:toaster-filled",
	});
}

export default Component;
