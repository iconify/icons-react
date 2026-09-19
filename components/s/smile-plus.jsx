import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n09tnb1bj.css';
import '../../css/e/ekil0t11d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n09tnb1bj"/><path class="ekil0t11d"/>`,
		"fallback": "cil:smile-plus",
	});
}

export default Component;
