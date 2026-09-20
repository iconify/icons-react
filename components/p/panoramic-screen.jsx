import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su4aumbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su4aumbxo"/>`,
		"fallback": "streamline-sharp:panoramic-screen",
	});
}

export default Component;
