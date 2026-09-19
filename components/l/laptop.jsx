import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ft8lohb2t.css';
import '../../css/g/gwjg53brw.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ft8lohb2t"/><path class="gwjg53brw"/></g>`,
		"fallback": "et:laptop",
	});
}

export default Component;
