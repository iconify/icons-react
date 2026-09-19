import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz7t8ub8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz7t8ub8d"/>`,
		"fallback": "hugeicons:layer-send-to-back",
	});
}

export default Component;
