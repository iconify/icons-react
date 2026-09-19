import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuj4p-a8q.css';
import '../../css/j/j8hs3szgb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuj4p-a8q"/><path class="j8hs3szgb"/>`,
		"fallback": "cil:tablet",
	});
}

export default Component;
