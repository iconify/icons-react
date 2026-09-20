import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kochng6qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kochng6qk"/>`,
		"fallback": "simple-icons:philipshue",
	});
}

export default Component;
