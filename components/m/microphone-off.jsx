import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amgx-8bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="amgx-8bor"/>`,
		"fallback": "streamline-freehand:microphone-off",
	});
}

export default Component;
