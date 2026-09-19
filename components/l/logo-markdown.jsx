import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nze9ryb8u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nze9ryb8u"/>`,
		"fallback": "gravity-ui:logo-markdown",
	});
}

export default Component;
