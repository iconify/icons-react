import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w7s0n2bmd.css';
import '../../css/i/imb_7dwlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w7s0n2bmd"/><path class="imb_7dwlp"/></g>`,
		"fallback": "hugeicons:rotate-cw-square",
	});
}

export default Component;
