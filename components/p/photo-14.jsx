import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewe08fbhh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewe08fbhh"/>`,
		"fallback": "osmic:photo-14",
	});
}

export default Component;
