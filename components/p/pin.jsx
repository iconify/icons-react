import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r24kkipho.css';
import '../../css/t/tkv_8rbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r24kkipho"/><path clip-rule="evenodd" class="tkv_8rbzo"/></g>`,
		"fallback": "nrk:pin",
	});
}

export default Component;
