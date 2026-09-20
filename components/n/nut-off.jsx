import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lajjgabck.css';
import '../../css/i/i2e6hxr2z.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lajjgabck"/><path clip-rule="evenodd" class="i2e6hxr2z"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:nut-off",
	});
}

export default Component;
