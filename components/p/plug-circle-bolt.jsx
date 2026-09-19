import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otfun1b2l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otfun1b2l"/>`,
		"fallback": "fa7-solid:plug-circle-bolt",
	});
}

export default Component;
