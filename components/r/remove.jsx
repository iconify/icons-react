import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ksowa4g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ksowa4g"/>`,
		"fallback": "codicon:remove",
	});
}

export default Component;
