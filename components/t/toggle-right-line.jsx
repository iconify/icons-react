import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-_rut9uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-_rut9uq"/>`,
		"fallback": "mingcute:toggle-right-line",
	});
}

export default Component;
