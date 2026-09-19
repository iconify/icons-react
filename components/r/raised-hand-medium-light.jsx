import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7cr2bbty.css';
import '../../css/f/f-gkeybdd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z7cr2bbty"/><path class="f-gkeybdd"/></g>`,
		"fallback": "fluent-emoji-flat:raised-hand-medium-light",
	});
}

export default Component;
