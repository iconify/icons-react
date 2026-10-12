import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9u0pyb6c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9u0pyb6c"/>`,
		"fallback": "garden:video-strike-fill-20",
	});
}

export default Component;
