import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acd9dhh2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acd9dhh2u"/>`,
		"fallback": "thesvg-color:sahibinden",
	});
}

export default Component;
