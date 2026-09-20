import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7t7606qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7t7606qb"/>`,
		"fallback": "simple-icons:listenhub",
	});
}

export default Component;
