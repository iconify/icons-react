import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lr62wwxmj.css';
import '../../css/q/qakyn8_8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lr62wwxmj"/><path class="qakyn8_8n"/></g>`,
		"fallback": "reicon:mouse-square",
	});
}

export default Component;
