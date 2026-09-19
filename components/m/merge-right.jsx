import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f45aa6gqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f45aa6gqp"/>`,
		"fallback": "griddy-icons:merge-right",
	});
}

export default Component;
