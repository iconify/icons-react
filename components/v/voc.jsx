import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb58uebry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb58uebry"/>`,
		"fallback": "cbi:voc",
	});
}

export default Component;
