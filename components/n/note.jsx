import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia3e15b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia3e15b9c"/>`,
		"fallback": "bxs:note",
	});
}

export default Component;
