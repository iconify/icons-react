import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqdj_sbsf.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqdj_sbsf"/>`,
		"fallback": "fa6-solid:truck-field-un",
	});
}

export default Component;
