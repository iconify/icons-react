import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufwsjyb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufwsjyb3p"/>`,
		"fallback": "mingcute:rewind-forward-30-fill",
	});
}

export default Component;
