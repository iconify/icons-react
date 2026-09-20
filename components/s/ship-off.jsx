import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf2akq2kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf2akq2kn"/>`,
		"fallback": "tabler:ship-off",
	});
}

export default Component;
