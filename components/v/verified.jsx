import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t46xo9e-c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t46xo9e-c"/>`,
		"fallback": "codicon:verified",
	});
}

export default Component;
