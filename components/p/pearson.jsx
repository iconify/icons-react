import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxdyb9byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxdyb9byb"/>`,
		"fallback": "simple-icons:pearson",
	});
}

export default Component;
