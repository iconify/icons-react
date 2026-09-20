import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4y7eublc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4y7eublc"/>`,
		"fallback": "thesvg:organic-maps",
	});
}

export default Component;
