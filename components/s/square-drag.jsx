import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hkq_mabjt.css';
import '../../css/v/v8hyl3trp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hkq_mabjt"/><path class="v8hyl3trp"/></g>`,
		"fallback": "proicons:square-drag",
	});
}

export default Component;
