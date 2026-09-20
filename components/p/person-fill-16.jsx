import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlaz4-4se.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlaz4-4se"/>`,
		"fallback": "octicon:person-fill-16",
	});
}

export default Component;
