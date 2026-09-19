import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mvt_p9b4u.css';
import '../../css/r/rfs2-s03p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mvt_p9b4u"/><path class="rfs2-s03p"/></g>`,
		"fallback": "glyphs:user-outline",
	});
}

export default Component;
