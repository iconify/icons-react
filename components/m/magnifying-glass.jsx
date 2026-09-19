import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc2z0-6oe.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc2z0-6oe"/>`,
		"fallback": "foundation:magnifying-glass",
	});
}

export default Component;
