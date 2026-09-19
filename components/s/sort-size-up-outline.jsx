import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s0xeqnboc.css';
import '../../css/s/s_634tm5j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s0xeqnboc"/><path class="s_634tm5j"/></g>`,
		"fallback": "glyphs:sort-size-up-outline",
	});
}

export default Component;
