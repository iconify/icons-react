import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg0z4wbgl.css';
import '../../css/g/gkrl9j4we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg0z4wbgl"/><path clip-rule="evenodd" class="gkrl9j4we"/>`,
		"fallback": "solar:volume-small-bold-duotone",
	});
}

export default Component;
