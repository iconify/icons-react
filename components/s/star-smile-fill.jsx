import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_n5rqe1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_n5rqe1t"/>`,
		"fallback": "ri:star-smile-fill",
	});
}

export default Component;
