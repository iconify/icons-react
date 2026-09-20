import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mmtbiq4iv.css';
import '../../css/w/wmbt88n4x.css';
import '../../css/q/q3fonv9pj.css';
import '../../css/v/viki5hbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mmtbiq4iv"/><path class="wmbt88n4x"/><path class="q3fonv9pj"/><path class="viki5hbnd"/></g>`,
		"fallback": "solar:watch-round-bold-duotone",
	});
}

export default Component;
