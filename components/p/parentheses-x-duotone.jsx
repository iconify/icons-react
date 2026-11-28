import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz8yk_b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz8yk_b3a primary"/>`,
		"fallback": "iconaut:parentheses-x-duotone",
	});
}

export default Component;
