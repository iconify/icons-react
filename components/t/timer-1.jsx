import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9rpw75hx.css';
import '../../css/v/v5q81xpom.css';
import '../../css/z/z873o0biu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9rpw75hx"/><path class="v5q81xpom"/><path class="z873o0biu"/></g>`,
		"fallback": "glyphs:timer-1",
	});
}

export default Component;
