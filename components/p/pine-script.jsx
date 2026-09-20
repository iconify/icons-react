import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmbb1eb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmbb1eb7m"/>`,
		"fallback": "thesvg-color:pine-script",
	});
}

export default Component;
