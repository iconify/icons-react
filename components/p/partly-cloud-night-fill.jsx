import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtgo2qbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtgo2qbvt"/>`,
		"fallback": "mingcute:partly-cloud-night-fill",
	});
}

export default Component;
