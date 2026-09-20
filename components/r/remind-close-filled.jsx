import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x44ki8bqk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x44ki8bqk"/>`,
		"fallback": "lsicon:remind-close-filled",
	});
}

export default Component;
