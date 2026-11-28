import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8j5p1brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8j5p1brp"/>`,
		"fallback": "noviair-light:map-pin",
	});
}

export default Component;
