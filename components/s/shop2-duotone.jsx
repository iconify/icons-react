import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gbtnanbbz.css';
import '../../css/h/hnnvi03bs.css';
import '../../css/x/xw87_lb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gbtnanbbz"/><path clip-rule="evenodd" class="hnnvi03bs"/><path class="xw87_lb2a"/></g>`,
		"fallback": "reicon:shop2-duotone",
	});
}

export default Component;
