import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-181c0-f.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-181c0-f"/>`,
		"fallback": "picon:ligature",
	});
}

export default Component;
