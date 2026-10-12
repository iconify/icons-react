import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikj9gwsrs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikj9gwsrs"/>`,
		"fallback": "garden:megaphone-fill-20",
	});
}

export default Component;
