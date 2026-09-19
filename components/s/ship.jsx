import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldt3a1bha.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldt3a1bha"/>`,
		"fallback": "fa-solid:ship",
	});
}

export default Component;
