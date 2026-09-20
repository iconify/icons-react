import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-hj91l4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-hj91l4a"/>`,
		"fallback": "simple-icons:payloadcms",
	});
}

export default Component;
