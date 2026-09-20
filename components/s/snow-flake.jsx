import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eul96sbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eul96sbdd"/>`,
		"fallback": "streamline-sharp:snow-flake",
	});
}

export default Component;
