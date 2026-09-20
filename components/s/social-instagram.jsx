import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in7luyb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in7luyb9o"/>`,
		"fallback": "typcn:social-instagram",
	});
}

export default Component;
