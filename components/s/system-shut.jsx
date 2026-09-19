import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imrr2wcsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imrr2wcsy"/>`,
		"fallback": "iconoir:system-shut",
	});
}

export default Component;
