import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx5d-bc1s.css';
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
		"content": `<g clip-rule="evenodd" class="nx5d-bc1s"><path class="tv92lqy5r"/><path class="f4v228b-b"/></g>`,
		"fallback": "thesvg-color:unreal-engine-dark",
	});
}

export default Component;
