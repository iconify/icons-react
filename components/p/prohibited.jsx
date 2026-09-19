import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7-j0_rby.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7-j0_rby"/>`,
		"fallback": "foundation:prohibited",
	});
}

export default Component;
