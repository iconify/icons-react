import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekj6e4b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekj6e4b_z"/>`,
		"fallback": "thesvg:kinsta",
	});
}

export default Component;
