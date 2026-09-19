import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4vl0yfzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4vl0yfzx"/>`,
		"fallback": "cbi:model-s-charge",
	});
}

export default Component;
