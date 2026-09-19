import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/j/j-c6jjbfw.css';
import '../../css/z/z2i2fgb9l.css';
import '../../css/s/sj6znnmmd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="j-c6jjbfw"/><path class="z2i2fgb9l"/><path class="sj6znnmmd"/></g>`,
		"fallback": "fluent-emoji-flat:lying-face",
	});
}

export default Component;
