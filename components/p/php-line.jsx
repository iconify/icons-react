import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou2w_pd9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou2w_pd9w"/>`,
		"fallback": "ri:php-line",
	});
}

export default Component;
