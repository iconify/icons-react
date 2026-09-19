import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo0n59l5q.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo0n59l5q"/>`,
		"fallback": "fa:vimeo",
	});
}

export default Component;
