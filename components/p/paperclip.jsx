import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/ns9l4jexk.css';
import '../../css/m/m1ej8ab-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ns9l4jexk"/><path class="m1ej8ab-d wm-deco"/></g>`,
		"fallback": "withicons-kawaii:paperclip",
	});
}

export default Component;
