import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb-2zacbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb-2zacbw"/>`,
		"fallback": "uil:telescope",
	});
}

export default Component;
