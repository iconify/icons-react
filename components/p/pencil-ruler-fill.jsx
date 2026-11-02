import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iabzukq5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iabzukq5d"/>`,
		"fallback": "mingcute:pencil-ruler-fill",
	});
}

export default Component;
