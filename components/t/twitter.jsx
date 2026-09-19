import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzoe9qb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzoe9qb0u"/>`,
		"fallback": "iconoir:twitter",
	});
}

export default Component;
