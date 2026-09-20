import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_o8_ue3o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_o8_ue3o"/>`,
		"fallback": "maki:town",
	});
}

export default Component;
