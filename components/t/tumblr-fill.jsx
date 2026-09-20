import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukpjozb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukpjozb_l"/>`,
		"fallback": "ri:tumblr-fill",
	});
}

export default Component;
