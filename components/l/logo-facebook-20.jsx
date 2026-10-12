import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po9ungb1e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po9ungb1e"/>`,
		"fallback": "garden:logo-facebook-20",
	});
}

export default Component;
