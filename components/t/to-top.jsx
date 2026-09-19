import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0-k71zpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0-k71zpu"/>`,
		"fallback": "bxs:to-top",
	});
}

export default Component;
