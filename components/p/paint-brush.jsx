import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oot8nnbci.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oot8nnbci"/>`,
		"fallback": "la:paint-brush",
	});
}

export default Component;
