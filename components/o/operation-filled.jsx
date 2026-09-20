import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6mslm3di.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m6mslm3di"/>`,
		"fallback": "lsicon:operation-filled",
	});
}

export default Component;
