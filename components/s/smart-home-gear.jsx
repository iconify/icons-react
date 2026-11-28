import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jctd3-bez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jctd3-bez"/>`,
		"fallback": "noviair-light:smart-home-gear",
	});
}

export default Component;
