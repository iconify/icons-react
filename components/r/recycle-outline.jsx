import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fehltxrvw.css';
import '../../css/s/se_bf3r9l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fehltxrvw"/><path class="se_bf3r9l"/></g>`,
		"fallback": "glyphs:recycle-outline",
	});
}

export default Component;
