import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8f7b6bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x8f7b6bjo"/>`,
		"fallback": "basil:skip-next-outline",
	});
}

export default Component;
