import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zvi6v-3ia.css';
import '../../css/l/lntqxnbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zvi6v-3ia"/><path clip-rule="evenodd" class="lntqxnbhs"/></g>`,
		"fallback": "reicon:memo",
	});
}

export default Component;
