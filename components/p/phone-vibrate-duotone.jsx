import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxlp_5bsv.css';
import '../../css/n/n3uohw5yd.css';
import '../../css/t/tu7xbzh8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gxlp_5bsv"/><path class="n3uohw5yd"/><path clip-rule="evenodd" class="tu7xbzh8d"/></g>`,
		"fallback": "reicon:phone-vibrate-duotone",
	});
}

export default Component;
