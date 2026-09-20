import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-e5j90ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-e5j90ff"/>`,
		"fallback": "mdi:power-socket-type-j",
	});
}

export default Component;
