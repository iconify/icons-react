import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qd7gv945m.css';
import '../../css/b/bny19rbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qd7gv945m"/><path class="bny19rbcn"/></g>`,
		"fallback": "hugeicons:user-ai",
	});
}

export default Component;
