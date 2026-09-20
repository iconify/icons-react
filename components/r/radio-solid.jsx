import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uay64kd_o.css';
import '../../css/a/a4xigbc7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uay64kd_o"/><path clip-rule="evenodd" class="a4xigbc7f"/></g>`,
		"fallback": "nrk:radio-solid",
	});
}

export default Component;
