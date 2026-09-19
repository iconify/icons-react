import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr9ouymmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr9ouymmo"/>`,
		"fallback": "gridicons:stats",
	});
}

export default Component;
