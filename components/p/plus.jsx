import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5gq29b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5gq29b2l"/>`,
		"fallback": "humbleicons:plus",
	});
}

export default Component;
