import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdg4rh5wn.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdg4rh5wn"/>`,
		"fallback": "maki:stadium-11",
	});
}

export default Component;
