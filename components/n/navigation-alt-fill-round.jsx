import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbbqp8bsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbbqp8bsh"/>`,
		"fallback": "coolicons:navigation-alt-fill-round",
	});
}

export default Component;
