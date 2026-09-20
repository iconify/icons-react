import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp-an9b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp-an9b3d"/>`,
		"fallback": "mingcute:magic-1-line",
	});
}

export default Component;
