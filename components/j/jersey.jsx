import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg0-icc4i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg0-icc4i"/>`,
		"fallback": "codicon:jersey",
	});
}

export default Component;
