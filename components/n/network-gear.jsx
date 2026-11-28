import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2_mlhb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2_mlhb6t"/>`,
		"fallback": "noviair-light:network-gear",
	});
}

export default Component;
