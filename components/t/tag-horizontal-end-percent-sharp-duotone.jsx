import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l1ojs5toy.css';
import '../../css/e/eh_8t3brt.css';
import '../../css/d/d9f73pbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l1ojs5toy"/><path class="eh_8t3brt"/><path class="d9f73pbit"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-end-percent-sharp-duotone",
	});
}

export default Component;
