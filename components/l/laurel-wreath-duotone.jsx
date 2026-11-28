import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rflspu-1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary rflspu-1a"/>`,
		"fallback": "iconaut:laurel-wreath-duotone",
	});
}

export default Component;
