import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1tbpzbtk.css';
import '../../css/m/mitzgwbte.css';
import '../../css/u/u7z7qdbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s1tbpzbtk"/><path clip-rule="evenodd" class="mitzgwbte"/><path class="u7z7qdbes"/></g>`,
		"fallback": "solar:watch-square-bold",
	});
}

export default Component;
