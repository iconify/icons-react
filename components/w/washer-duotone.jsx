import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwknfdbgo.css';
import '../../css/r/rvpmzysup.css';
import '../../css/z/zafc4__dd.css';
import '../../css/n/nftvv-oek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fwknfdbgo"/><path clip-rule="evenodd" class="rvpmzysup"/><path class="zafc4__dd"/><path class="nftvv-oek"/></g>`,
		"fallback": "reicon:washer-duotone",
	});
}

export default Component;
