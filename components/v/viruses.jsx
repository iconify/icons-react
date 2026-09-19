import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en0bapbek.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en0bapbek"/>`,
		"fallback": "fa-solid:viruses",
	});
}

export default Component;
