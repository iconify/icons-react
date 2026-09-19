import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sufbaeydo.css';
import '../../css/k/kwccv5wkb.css';
import '../../css/t/t1dtgzg2c.css';
import '../../css/v/vxk-ns8jz.css';
import '../../css/n/nthz9kb0v.css';
import '../../css/p/pmdxg9b9d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sufbaeydo"/><path clip-rule="evenodd" class="kwccv5wkb"/><path clip-rule="evenodd" class="t1dtgzg2c"/><path class="vxk-ns8jz"/><path clip-rule="evenodd" class="nthz9kb0v"/><path clip-rule="evenodd" class="pmdxg9b9d"/></g>`,
		"fallback": "pepicons:truck-print",
	});
}

export default Component;
