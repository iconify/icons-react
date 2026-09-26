import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4-e_9bsl.css';
import '../../css/k/kwk21pb9m.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qzk5zubqx.css';
import '../../css/f/fujosbckp.css';
import '../../css/k/k_arrub8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u4-e_9bsl"/><path clip-rule="evenodd" class="kwk21pb9m"/><g class="mc2zb0bvp"><path class="qzk5zubqx"/><path class="fujosbckp"/><path class="k_arrub8k"/></g></g>`,
		"fallback": "solar:tornado-bold-duotone",
	});
}

export default Component;
