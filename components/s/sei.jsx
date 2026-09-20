import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikcde1jrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikcde1jrz"/>`,
		"fallback": "token:sei",
	});
}

export default Component;
