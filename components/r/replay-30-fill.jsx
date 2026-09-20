import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amx09ccet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amx09ccet"/>`,
		"fallback": "ri:replay-30-fill",
	});
}

export default Component;
