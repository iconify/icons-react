import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olyod0b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olyod0b1j"/>`,
		"fallback": "withicons:underline-solid",
	});
}

export default Component;
