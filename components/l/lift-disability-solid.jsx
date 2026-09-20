import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcinb9mms.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mcinb9mms"/>`,
		"fallback": "streamline:lift-disability-solid",
	});
}

export default Component;
