import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc3t8iprc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc3t8iprc"/>`,
		"fallback": "mingcute:layers-minus-fill",
	});
}

export default Component;
