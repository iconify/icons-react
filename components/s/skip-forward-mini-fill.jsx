import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5098jv3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5098jv3v"/>`,
		"fallback": "ri:skip-forward-mini-fill",
	});
}

export default Component;
