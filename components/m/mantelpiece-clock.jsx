import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yptfkjl7w.css';
import '../../css/j/j3spvb9xn.css';
import '../../css/r/r5t1r1vru.css';
import '../../css/f/fk2aglbac.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yptfkjl7w"/><path class="j3spvb9xn"/><path class="r5t1r1vru"/><path class="fk2aglbac"/></g>`,
		"fallback": "fluent-emoji-flat:mantelpiece-clock",
	});
}

export default Component;
