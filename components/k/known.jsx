import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuk3ct2rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuk3ct2rx"/>`,
		"fallback": "simple-icons:known",
	});
}

export default Component;
