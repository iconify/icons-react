import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6qls-h6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6qls-h6r"/>`,
		"fallback": "cbi:soil-reading",
	});
}

export default Component;
