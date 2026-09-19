import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x56-msjyn.css';
import '../../css/f/f8f4d0auh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x56-msjyn"/><path class="f8f4d0auh"/></g>`,
		"fallback": "glyphs-poly:layer-group",
	});
}

export default Component;
