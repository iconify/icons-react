import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brdjalbqk.css';
import '../../css/u/u75arybek.css';
import '../../css/z/zvmv21b_v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="brdjalbqk"/><path class="u75arybek"/><path class="zvmv21b_v"/></g>`,
		"fallback": "glyphs:store-break-duo",
	});
}

export default Component;
