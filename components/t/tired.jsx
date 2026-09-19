import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5ux1qk-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5ux1qk-z"/>`,
		"fallback": "bxs:tired",
	});
}

export default Component;
