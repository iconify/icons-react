import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx7y6ebae.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx7y6ebae"/>`,
		"fallback": "pinhead:smiling-face-in-circle",
	});
}

export default Component;
