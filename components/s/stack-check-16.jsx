import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu8w1z02t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu8w1z02t"/>`,
		"fallback": "octicon:stack-check-16",
	});
}

export default Component;
