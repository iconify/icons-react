import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dna4t1d0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dna4t1d0o"/>`,
		"fallback": "mingcute:message-square-off-fill",
	});
}

export default Component;
