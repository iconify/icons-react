import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viw7wsocf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viw7wsocf"/>`,
		"fallback": "boxicons:reflect-horizontal",
	});
}

export default Component;
