import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hmvm9k37z.css';
import '../../css/h/h9tngubga.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/d_5l10bed.css';
import '../../css/n/n4ivllbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hmvm9k37z"/><path class="h9tngubga"/><g class="mc2zb0bvp"><path class="d_5l10bed"/><path class="n4ivllbah"/></g></g>`,
		"fallback": "solar:lightning-bold-duotone",
	});
}

export default Component;
