import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7h66hbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7h66hbnb"/>`,
		"fallback": "mynaui:skip-back",
	});
}

export default Component;
