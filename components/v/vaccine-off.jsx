import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u372c1oye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u372c1oye"/>`,
		"fallback": "tabler:vaccine-off",
	});
}

export default Component;
