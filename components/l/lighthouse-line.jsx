import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcivg91id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcivg91id"/>`,
		"fallback": "mingcute:lighthouse-line",
	});
}

export default Component;
