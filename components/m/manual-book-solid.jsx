import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwl6tue6m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dwl6tue6m"/>`,
		"fallback": "streamline:manual-book-solid",
	});
}

export default Component;
