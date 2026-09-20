import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2ktfdbgj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y2ktfdbgj"/>`,
		"fallback": "streamline:user-remove-subtract-solid",
	});
}

export default Component;
