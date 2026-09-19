import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lk0f4vb0h.css';
import '../../css/j/jbgc_pbkv.css';
import '../../css/z/zy2inmb_d.css';
import '../../css/i/ivbd4mb_n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lk0f4vb0h"/><path class="jbgc_pbkv"/><path class="zy2inmb_d"/><path class="ivbd4mb_n"/></g>`,
		"fallback": "pepicons:microphone",
	});
}

export default Component;
