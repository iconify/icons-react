import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p3hjeqb3x.css';
import '../../css/h/hxcq42bms.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p3hjeqb3x"/><path class="hxcq42bms"/></g>`,
		"fallback": "glyphs-poly:lock",
	});
}

export default Component;
