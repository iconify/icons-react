import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/putv21q9x.css';
import '../../css/w/w485afb6u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="putv21q9x"/><path class="w485afb6u"/></g>`,
		"fallback": "glyphs:sparkles-1-outline",
	});
}

export default Component;
