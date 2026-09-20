import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmi63dt4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmi63dt4t"/>`,
		"fallback": "mdi:relation-one-to-zero-or-many",
	});
}

export default Component;
