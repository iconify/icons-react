import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfb1-up3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfb1-up3y"/>`,
		"fallback": "typcn:social-google-plus-circular",
	});
}

export default Component;
