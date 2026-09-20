import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qd4wafbbv.css';
import '../../css/l/lwpz82cdv.css';
import '../../css/x/xi-jxcbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qd4wafbbv"/><path class="lwpz82cdv"/><path class="xi-jxcbdc"/></g>`,
		"fallback": "reicon:mobile-programming",
	});
}

export default Component;
