import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgj4jib6k.css';
import '../../css/h/h5p52qoon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgj4jib6k"/><path class="h5p52qoon"/>`,
		"fallback": "token:unix",
	});
}

export default Component;
