import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hb57-vb4h.css';
import '../../css/c/c4odhpb2l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hb57-vb4h"/><path class="c4odhpb2l"/></g>`,
		"fallback": "glyphs-poly:laptop",
	});
}

export default Component;
