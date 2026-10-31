import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y08iq0bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y08iq0bun"/>`,
		"fallback": "struq:sort-size-up",
	});
}

export default Component;
