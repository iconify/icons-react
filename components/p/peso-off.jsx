import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tr8hrmpkp.css';
import '../../css/w/wq26f1b_k.css';
import '../../css/f/f1hncobhb.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tr8hrmpkp"/><path clip-rule="evenodd" class="wq26f1b_k"/><path clip-rule="evenodd" class="f1hncobhb"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:peso-off",
	});
}

export default Component;
