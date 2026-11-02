import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa9pn04_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa9pn04_p"/>`,
		"fallback": "mingcute:unlock-line",
	});
}

export default Component;
