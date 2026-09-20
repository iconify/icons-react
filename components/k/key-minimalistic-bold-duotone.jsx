import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mi7y_nv-e.css';
import '../../css/a/al2n4txeu.css';
import '../../css/p/pq1poqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mi7y_nv-e"/><path class="al2n4txeu"/><path class="pq1poqbvf"/></g>`,
		"fallback": "solar:key-minimalistic-bold-duotone",
	});
}

export default Component;
