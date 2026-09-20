import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yelp_8bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yelp_8bwe"/>`,
		"fallback": "si:rocket-fill",
	});
}

export default Component;
