import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcx77dbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcx77dbab"/>`,
		"fallback": "thesvg-color:langchain-corporate",
	});
}

export default Component;
