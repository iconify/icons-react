import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmd_8-byf.css';
import '../../css/c/crte8sbou.css';
import '../../css/y/yd-unbbsc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bmd_8-byf"/><path class="crte8sbou"/><path class="yd-unbbsc"/></g>`,
		"fallback": "fluent-emoji-flat:sake",
	});
}

export default Component;
