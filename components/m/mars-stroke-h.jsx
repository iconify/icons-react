import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lstl2ybmy.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lstl2ybmy"/>`,
		"fallback": "fa-solid:mars-stroke-h",
	});
}

export default Component;
