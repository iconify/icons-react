import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrfo_dk8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrfo_dk8g"/>`,
		"fallback": "noviair-light:map-lock",
	});
}

export default Component;
