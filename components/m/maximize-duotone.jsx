import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axz7gbckk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axz7gbckk primary"/>`,
		"fallback": "iconaut:maximize-duotone",
	});
}

export default Component;
