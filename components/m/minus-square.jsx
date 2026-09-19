import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um9txejzn.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um9txejzn"/>`,
		"fallback": "fa-solid:minus-square",
	});
}

export default Component;
