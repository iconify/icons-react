import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt33bw9wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt33bw9wc"/>`,
		"fallback": "iconamoon:ticket-thin",
	});
}

export default Component;
