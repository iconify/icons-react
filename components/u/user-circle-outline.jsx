import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnb8lgb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnb8lgb3n"/>`,
		"fallback": "flowbite:user-circle-outline",
	});
}

export default Component;
