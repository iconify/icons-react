import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/un5eawvbo.css';
import '../../css/r/rd0ahsbfx.css';
import '../../css/c/cig-abbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="un5eawvbo"/><path class="rd0ahsbfx"/><path clip-rule="evenodd" class="cig-abbjo"/></g>`,
		"fallback": "reicon:nightstand-duotone",
	});
}

export default Component;
