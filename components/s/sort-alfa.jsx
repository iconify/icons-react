import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n48t9qb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n48t9qb4p"/>`,
		"fallback": "lets-icons:sort-alfa",
	});
}

export default Component;
