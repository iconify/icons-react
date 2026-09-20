import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h51xfj2jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h51xfj2jw"/>`,
		"fallback": "mingcute:unfold-vertical-fill",
	});
}

export default Component;
