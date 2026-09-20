import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pelcyhb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pelcyhb6y"/>`,
		"fallback": "mingcute:maya-pyramids-fill",
	});
}

export default Component;
