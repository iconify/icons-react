import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qakyn8_8n.css';
import '../../css/j/jsy9-fwnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qakyn8_8n"/><path class="jsy9-fwnj"/></g>`,
		"fallback": "reicon:mouse-circle3",
	});
}

export default Component;
