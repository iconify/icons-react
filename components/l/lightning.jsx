import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j69lbib8s.css';
import '../../css/m/mo50q3irv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j69lbib8s"/><path class="mo50q3irv"/></g>`,
		"fallback": "glyphs-poly:lightning",
	});
}

export default Component;
