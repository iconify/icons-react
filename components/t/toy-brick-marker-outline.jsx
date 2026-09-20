import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_264jbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_264jbws"/>`,
		"fallback": "mdi:toy-brick-marker-outline",
	});
}

export default Component;
