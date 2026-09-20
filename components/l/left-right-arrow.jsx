import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cefw7kb1y.css';
import '../../css/p/pfyahacbh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cefw7kb1y"/><path class="pfyahacbh"/>`,
		"fallback": "openmoji:left-right-arrow",
	});
}

export default Component;
