import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfm4mdbvy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfm4mdbvy"/>`,
		"fallback": "openmoji:scale",
	});
}

export default Component;
