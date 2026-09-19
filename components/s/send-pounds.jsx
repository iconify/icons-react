import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hogky4pfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hogky4pfe"/>`,
		"fallback": "iconoir:send-pounds",
	});
}

export default Component;
