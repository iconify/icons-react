import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgajuu1ba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgajuu1ba"/>`,
		"fallback": "mingcute:star-2-fill",
	});
}

export default Component;
