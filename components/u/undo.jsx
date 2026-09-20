import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skh9tab_x.css';

const viewBox = {"width":24,"height":24,"left":-0.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skh9tab_x"/>`,
		"fallback": "jam:undo",
	});
}

export default Component;
