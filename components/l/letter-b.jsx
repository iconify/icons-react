import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li5e-nbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li5e-nbxp"/>`,
		"fallback": "tabler:letter-b",
	});
}

export default Component;
