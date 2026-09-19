import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc3urnw9c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc3urnw9c"/>`,
		"fallback": "codicon:mail-read",
	});
}

export default Component;
