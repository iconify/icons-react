import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx9z-d2ap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx9z-d2ap"/>`,
		"fallback": "coolicons:star-fill-round",
	});
}

export default Component;
