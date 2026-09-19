import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vti5d67lu.css';
import '../../css/v/v5lgh3l7i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vti5d67lu"/><path class="v5lgh3l7i"/></g>`,
		"fallback": "glyphs:street-light-1-outline",
	});
}

export default Component;
