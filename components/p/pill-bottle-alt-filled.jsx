import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb2njdyzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb2njdyzw"/>`,
		"fallback": "boxicons:pill-bottle-alt-filled",
	});
}

export default Component;
