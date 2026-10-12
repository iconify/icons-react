import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig-lqcc0u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig-lqcc0u"/>`,
		"fallback": "garden:sandbox-fill-20",
	});
}

export default Component;
