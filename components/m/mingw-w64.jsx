import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwg48r4wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwg48r4wt"/>`,
		"fallback": "thesvg-color:mingw-w64",
	});
}

export default Component;
