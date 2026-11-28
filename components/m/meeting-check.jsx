import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm-6fxb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm-6fxb4z"/>`,
		"fallback": "noviair:meeting-check",
	});
}

export default Component;
