import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdodvvbuo.css';

const viewBox = {"width":560,"height":830};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdodvvbuo"/>`,
		"fallback": "il:music",
	});
}

export default Component;
