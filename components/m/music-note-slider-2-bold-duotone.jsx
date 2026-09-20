import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fjqy4muuq.css';
import '../../css/l/lvd9hj0kw.css';
import '../../css/u/u-62wbcax.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/ojdl96y2v.css';
import '../../css/r/r5pybk82q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fjqy4muuq"/><path class="lvd9hj0kw"/><path clip-rule="evenodd" class="u-62wbcax"/><g class="mc2zb0bvp"><path class="ojdl96y2v"/><path class="r5pybk82q"/></g></g>`,
		"fallback": "solar:music-note-slider-2-bold-duotone",
	});
}

export default Component;
