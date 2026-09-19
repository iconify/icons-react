import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a6o3somnd.css';
import '../../css/g/g8r39dmhp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a6o3somnd"/><path class="g8r39dmhp"/></g>`,
		"fallback": "glyphs:repeat-outline",
	});
}

export default Component;
