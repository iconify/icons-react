import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdnb1nb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdnb1nb2z"/>`,
		"fallback": "eva:person-add-outline",
	});
}

export default Component;
