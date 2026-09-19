import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o27bx7bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o27bx7bnc"/>`,
		"fallback": "feather:thumbs-up",
	});
}

export default Component;
