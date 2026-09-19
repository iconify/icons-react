import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ir8y2xb-f.css';
import '../../css/s/sdunxb8pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ir8y2xb-f"/><path clip-rule="evenodd" class="sdunxb8pw"/></g>`,
		"fallback": "gg:thermostat",
	});
}

export default Component;
