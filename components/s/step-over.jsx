import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cp-xsdtlp.css';
import '../../css/g/gg4q_rxvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cp-xsdtlp"/><path class="gg4q_rxvk"/></g>`,
		"fallback": "hugeicons:step-over",
	});
}

export default Component;
