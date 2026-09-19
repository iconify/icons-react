import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwt8qti7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwt8qti7i"/>`,
		"fallback": "iconoir:log-in",
	});
}

export default Component;
