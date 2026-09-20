import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4fvl9bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4fvl9bjm"/>`,
		"fallback": "mdi:screw-round-top",
	});
}

export default Component;
