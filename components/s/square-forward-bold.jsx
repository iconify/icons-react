import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw0niobhd.css';
import '../../css/i/iltuah3xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw0niobhd"/><path class="iltuah3xd"/>`,
		"fallback": "solar:square-forward-bold",
	});
}

export default Component;
