import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tg3j7u-pk.css';
import '../../css/u/u5nel-bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tg3j7u-pk"/><path class="u5nel-bfp"/></g>`,
		"fallback": "healthicons:paved-road-alt-24px",
	});
}

export default Component;
