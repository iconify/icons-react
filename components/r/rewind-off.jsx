import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cpcm_cbdw.css';
import '../../css/u/uko6bzd7v.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cpcm_cbdw"/><path clip-rule="evenodd" class="uko6bzd7v"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:rewind-off",
	});
}

export default Component;
