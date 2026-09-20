import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbnj8bycg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbnj8bycg"/>`,
		"fallback": "mi:user-remove",
	});
}

export default Component;
