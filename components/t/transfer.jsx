import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc0y6abmd.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc0y6abmd"/>`,
		"fallback": "oi:transfer",
	});
}

export default Component;
