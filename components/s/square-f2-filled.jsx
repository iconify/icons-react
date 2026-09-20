import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfxbwp2_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfxbwp2_c"/>`,
		"fallback": "tabler:square-f2-filled",
	});
}

export default Component;
