import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtr2n8b0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtr2n8b0s"/>`,
		"fallback": "boxicons:movie",
	});
}

export default Component;
