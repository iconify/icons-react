import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jz4qbpbes.css';
import '../../css/o/otbkqlb6h.css';
import '../../css/h/hxogdab1a.css';
import '../../css/k/kayfskbga.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jz4qbpbes"/><path class="otbkqlb6h"/><path class="hxogdab1a"/><path class="kayfskbga"/></g>`,
		"fallback": "glyphs:robot-head-outline",
	});
}

export default Component;
