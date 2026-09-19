import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pvkpvmyui.css';
import '../../css/v/vvjm9e27u.css';
import '../../css/q/q56rgfbjg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pvkpvmyui"/><path class="vvjm9e27u"/><path class="q56rgfbjg"/></g>`,
		"fallback": "glyphs:target-bold",
	});
}

export default Component;
