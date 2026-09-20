import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz8-0owbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz8-0owbf"/>`,
		"fallback": "ri:pencil-ai-line",
	});
}

export default Component;
