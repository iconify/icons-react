import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_nx_3bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_nx_3bwo"/>`,
		"fallback": "lucide:pencil-line",
	});
}

export default Component;
