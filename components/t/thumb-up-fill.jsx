import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ver42fbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ver42fbjb"/>`,
		"fallback": "ri:thumb-up-fill",
	});
}

export default Component;
