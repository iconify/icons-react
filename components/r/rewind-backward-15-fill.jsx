import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo7izzb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo7izzb3d"/>`,
		"fallback": "mingcute:rewind-backward-15-fill",
	});
}

export default Component;
