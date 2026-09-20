import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm80p_y1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm80p_y1i"/>`,
		"fallback": "ix:notification",
	});
}

export default Component;
