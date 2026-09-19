import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_0x8-b6i.css';
import '../../css/c/ch7v7jbbt.css';
import '../../css/c/cyx7yvbcf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_0x8-b6i"/><path class="ch7v7jbbt"/><path class="cyx7yvbcf"/></g>`,
		"fallback": "fluent-emoji-flat:paintbrush",
	});
}

export default Component;
