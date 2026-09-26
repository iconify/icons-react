import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsg5p00hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rsg5p00hj"/>`,
		"fallback": "solar:rows-2-outline",
	});
}

export default Component;
