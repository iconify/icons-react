import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im2y20bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="im2y20bas"/>`,
		"fallback": "solar:shuffle-bold",
	});
}

export default Component;
