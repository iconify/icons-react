import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r67ml6b6q.css';
import '../../css/a/a06xhab8s.css';
import '../../css/u/ukg_o6trj.css';
import '../../css/p/p89beacfe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r67ml6b6q"/><path class="a06xhab8s"/><path class="ukg_o6trj"/><path class="p89beacfe"/></g>`,
		"fallback": "glyphs:skull-1-outline",
	});
}

export default Component;
