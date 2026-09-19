import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_n5l8bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u_n5l8bhu"/>`,
		"fallback": "gg:presentation",
	});
}

export default Component;
