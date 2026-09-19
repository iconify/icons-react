import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g30nbhb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g30nbhb3i"/>`,
		"fallback": "eva:navigation-2-outline",
	});
}

export default Component;
