import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx5ve9brb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx5ve9brb"/>`,
		"fallback": "octicon:tasklist-16",
	});
}

export default Component;
