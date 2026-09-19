import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6g6chb6j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6g6chb6j"/>`,
		"fallback": "cib:matrix",
	});
}

export default Component;
