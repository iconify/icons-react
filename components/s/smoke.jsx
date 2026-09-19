import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lao2y7iei.css';
import '../../css/k/k10jtebwe.css';
import '../../css/q/qkcequqdr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lao2y7iei"/><path class="k10jtebwe"/><path class="qkcequqdr"/></g>`,
		"fallback": "glyphs-poly:smoke",
	});
}

export default Component;
