import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbdjjj2ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbdjjj2ra"/>`,
		"fallback": "typcn:social-facebook",
	});
}

export default Component;
