import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyj4jwbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyj4jwbiu"/>`,
		"fallback": "lets-icons:progress-light",
	});
}

export default Component;
