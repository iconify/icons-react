import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t96ugl3qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t96ugl3qb"/>`,
		"fallback": "cbi:upstairs",
	});
}

export default Component;
