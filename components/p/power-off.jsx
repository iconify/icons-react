import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by-tp_ohk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by-tp_ohk"/>`,
		"fallback": "keyline-icons:power-off",
	});
}

export default Component;
