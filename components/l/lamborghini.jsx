import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj1-1-_to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj1-1-_to"/>`,
		"fallback": "thesvg-color:lamborghini",
	});
}

export default Component;
