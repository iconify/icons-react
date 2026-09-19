import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v80edpb8n.css';
import '../../css/x/x1h8z3b3y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v80edpb8n"/><path class="x1h8z3b3y"/></g>`,
		"fallback": "glyphs:plug-1-outline",
	});
}

export default Component;
