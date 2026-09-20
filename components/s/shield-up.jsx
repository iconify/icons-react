import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_cyddb_p.css';
import '../../css/i/ihhtxk45i.css';
import '../../css/d/dehs78hfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y_cyddb_p"/><path class="ihhtxk45i"/><path clip-rule="evenodd" class="dehs78hfx"/></g>`,
		"fallback": "reicon:shield-up",
	});
}

export default Component;
