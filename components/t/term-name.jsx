import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjt1dwr8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjt1dwr8o"/>`,
		"fallback": "wordpress:term-name",
	});
}

export default Component;
