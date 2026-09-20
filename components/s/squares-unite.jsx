import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdat2y5gj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdat2y5gj"/>`,
		"fallback": "lucide:squares-unite",
	});
}

export default Component;
