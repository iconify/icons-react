import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qkp0jirpl.css';
import '../../css/r/rt5mctbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qkp0jirpl"/><path class="rt5mctbcv"/></g>`,
		"fallback": "covid:social-distancing-man",
	});
}

export default Component;
