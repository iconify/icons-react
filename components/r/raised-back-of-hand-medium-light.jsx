import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9kq2k2rz.css';
import '../../css/r/r69og3b5d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o9kq2k2rz"/><path class="r69og3b5d"/></g>`,
		"fallback": "fluent-emoji-flat:raised-back-of-hand-medium-light",
	});
}

export default Component;
