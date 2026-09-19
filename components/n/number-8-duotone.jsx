import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xow-v8lod.css';
import '../../css/k/k_uimnb6o.css';
import '../../css/h/hta0mxbau.css';
import '../../css/h/hhgyo3bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xow-v8lod"/><circle class="k_uimnb6o"/><circle class="hta0mxbau"/><circle class="hhgyo3bul"/></g>`,
		"fallback": "iconamoon:number-8-duotone",
	});
}

export default Component;
