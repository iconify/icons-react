import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eu6knub9g.css';
import '../../css/n/n4b9algmz.css';
import '../../css/k/k_oq4vuij.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/c/ctjqh1aad.css';
import '../../css/s/shjp9pbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eu6knub9g"/><path class="n4b9algmz"/><path class="k_oq4vuij"/><g class="mc2zb0bvp"><path class="ctjqh1aad"/><path class="shjp9pbqe"/></g></g>`,
		"fallback": "solar:planet-4-bold-duotone",
	});
}

export default Component;
