import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrphs9b4c.css';
import '../../css/a/a_7mg_ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jrphs9b4c"/><path class="a_7mg_ble"/></g>`,
		"fallback": "reicon:key-square5-filled",
	});
}

export default Component;
