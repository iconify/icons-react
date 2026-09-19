import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0bqxfgrf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0bqxfgrf"/>`,
		"fallback": "fa6-solid:tornado",
	});
}

export default Component;
