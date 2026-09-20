import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt5q8rs1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt5q8rs1d"/>`,
		"fallback": "keyline-icons:moon-fill",
	});
}

export default Component;
