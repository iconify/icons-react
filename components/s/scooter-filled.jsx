import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlcoxxb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlcoxxb8z"/>`,
		"fallback": "boxicons:scooter-filled",
	});
}

export default Component;
