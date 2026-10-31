import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v58v13bpg.css';
import '../../css/a/a7bozqbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v58v13bpg"/><path class="a7bozqbyt"/></g>`,
		"fallback": "coolicons:mosque-bulk-round",
	});
}

export default Component;
