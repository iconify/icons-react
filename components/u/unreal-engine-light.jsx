import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tv92lqy5r.css';
import '../../css/f/f4v228b-b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="tv92lqy5r"/><path class="f4v228b-b"/></g>`,
		"fallback": "thesvg-color:unreal-engine-light",
	});
}

export default Component;
