import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7z5c_djq.css';
import '../../css/m/m76m0-g7k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7z5c_djq"/><path class="m76m0-g7k"/>`,
		"fallback": "openmoji:left-arrow",
	});
}

export default Component;
