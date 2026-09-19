import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yu1ec6bwr.css';
import '../../css/h/hy-0j-bqo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yu1ec6bwr"/><path class="hy-0j-bqo"/></g>`,
		"fallback": "glyphs:spinner-1-outline",
	});
}

export default Component;
