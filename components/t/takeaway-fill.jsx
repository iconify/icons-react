import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q78528b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q78528b7f"/>`,
		"fallback": "ri:takeaway-fill",
	});
}

export default Component;
