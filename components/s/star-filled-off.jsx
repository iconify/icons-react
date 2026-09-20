import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/alyxxs0-g.css';
import '../../css/l/l43mnwb9x.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="alyxxs0-g"/><path clip-rule="evenodd" class="l43mnwb9x"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:star-filled-off",
	});
}

export default Component;
