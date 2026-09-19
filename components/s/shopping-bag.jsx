import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ien_hybah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ien_hybah"/>`,
		"fallback": "heroicons:shopping-bag",
	});
}

export default Component;
