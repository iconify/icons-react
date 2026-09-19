import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ocr4r30uq.css';
import '../../css/c/c1t6ucbve.css';
import '../../css/o/oae0thbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ocr4r30uq"/><path class="c1t6ucbve"/><path class="oae0thbyh"/></g>`,
		"fallback": "hugeicons:mouse-07",
	});
}

export default Component;
