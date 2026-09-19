import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2h_x22up.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2h_x22up"/>`,
		"fallback": "codicon:twitter",
	});
}

export default Component;
