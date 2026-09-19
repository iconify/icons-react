import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omgkdvbjr.css';

const viewBox = {"width":2048,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omgkdvbjr"/>`,
		"fallback": "fa:jsfiddle",
	});
}

export default Component;
