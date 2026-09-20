import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-ivx_rnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-ivx_rnr"/>`,
		"fallback": "simple-icons:meta",
	});
}

export default Component;
