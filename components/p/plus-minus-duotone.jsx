import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f44_mnbui.css';
import '../../css/k/kxm009byi.css';
import '../../css/z/zb5u0ulau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f44_mnbui"/><path class="kxm009byi"/><path clip-rule="evenodd" class="zb5u0ulau"/></g>`,
		"fallback": "reicon:plus-minus-duotone",
	});
}

export default Component;
