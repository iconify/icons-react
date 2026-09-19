import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j50u55b2l.css';
import '../../css/w/wvns4ab7f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j50u55b2l"/><path class="wvns4ab7f"/></g>`,
		"fallback": "glyphs:tree-3-duo",
	});
}

export default Component;
