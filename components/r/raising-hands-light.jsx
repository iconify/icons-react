import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygmumjetd.css';
import '../../css/j/j5hl4t8il.css';
import '../../css/d/de29zjbhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ygmumjetd"/><path class="j5hl4t8il"/><path class="de29zjbhg"/></g>`,
		"fallback": "fluent-emoji-flat:raising-hands-light",
	});
}

export default Component;
