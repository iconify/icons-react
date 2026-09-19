import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qznxftb5v.css';
import '../../css/c/cw1g2zbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qznxftb5v"/><path class="cw1g2zbqp"/></g>`,
		"fallback": "iconoir:language",
	});
}

export default Component;
