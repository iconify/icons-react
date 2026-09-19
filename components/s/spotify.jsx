import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh03e8bja.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh03e8bja"/>`,
		"fallback": "dashicons:spotify",
	});
}

export default Component;
