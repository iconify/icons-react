import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncxk4z-et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncxk4z-et"/>`,
		"fallback": "token:lina",
	});
}

export default Component;
