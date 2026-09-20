import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1f-g4bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1f-g4bho"/>`,
		"fallback": "typcn:social-instagram-circular",
	});
}

export default Component;
