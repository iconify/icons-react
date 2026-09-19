import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny4xytvip.css';

const viewBox = {"width":242,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ny4xytvip"/>`,
		"fallback": "file-icons:tcl",
	});
}

export default Component;
