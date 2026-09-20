import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foumo_b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foumo_b3y"/>`,
		"fallback": "mynaui:seven-octagon-solid",
	});
}

export default Component;
