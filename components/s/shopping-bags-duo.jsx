import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-3yxwbvg.css';
import '../../css/f/f0l3_nh-t.css';
import '../../css/y/ybenv9bfs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-3yxwbvg"/><path class="f0l3_nh-t"/><path class="ybenv9bfs"/></g>`,
		"fallback": "glyphs:shopping-bags-duo",
	});
}

export default Component;
