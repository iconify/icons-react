import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulq7grbbf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulq7grbbf"/>`,
		"fallback": "codicon:mic-filled",
	});
}

export default Component;
