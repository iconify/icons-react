import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0qa3eb7t.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0qa3eb7t"/>`,
		"fallback": "picon:printer",
	});
}

export default Component;
