import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h9euf_bze.css';
import '../../css/i/i29pzwzdk.css';
import '../../css/m/mmi-77tzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="h9euf_bze wm-k"/><path class="i29pzwzdk wm-a"/><path class="mmi-77tzp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:shuffle",
	});
}

export default Component;
