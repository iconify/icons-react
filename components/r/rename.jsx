import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5gpb-b2e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5gpb-b2e"/>`,
		"fallback": "codicon:rename",
	});
}

export default Component;
