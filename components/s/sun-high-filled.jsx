import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqrdaltbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqrdaltbn"/>`,
		"fallback": "tabler:sun-high-filled",
	});
}

export default Component;
