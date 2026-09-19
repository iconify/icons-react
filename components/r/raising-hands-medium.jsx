import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkri73hhh.css';
import '../../css/l/lllwq_bci.css';
import '../../css/d/de29zjbhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tkri73hhh"/><path class="lllwq_bci"/><path class="de29zjbhg"/></g>`,
		"fallback": "fluent-emoji-flat:raising-hands-medium",
	});
}

export default Component;
