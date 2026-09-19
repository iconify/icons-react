import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ai2bp8b3n.css';
import '../../css/m/m74n8ab_u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ai2bp8b3n"/><path class="m74n8ab_u"/></g>`,
		"fallback": "glyphs-poly:stamp",
	});
}

export default Component;
