import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqpqtwb_z.css';

const viewBox = {"width":961,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqpqtwb_z"/>`,
		"fallback": "whh:lan",
	});
}

export default Component;
