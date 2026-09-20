import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfij4qbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfij4qbqh"/>`,
		"fallback": "ri:mic-fill",
	});
}

export default Component;
