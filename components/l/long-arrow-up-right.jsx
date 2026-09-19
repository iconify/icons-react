import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nism3h_oq.css';
import '../../css/p/pul65i6my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nism3h_oq"/><path class="pul65i6my"/></g>`,
		"fallback": "iconoir:long-arrow-up-right",
	});
}

export default Component;
