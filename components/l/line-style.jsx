import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c26rphbad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c26rphbad"/>`,
		"fallback": "cil:line-style",
	});
}

export default Component;
