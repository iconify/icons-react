import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt7mvmblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt7mvmblb"/>`,
		"fallback": "mingcute:list-indent-decrease-fill",
	});
}

export default Component;
