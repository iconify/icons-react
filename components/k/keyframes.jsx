import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oxj5z9e-b.css';
import '../../css/t/ti0uovb4m.css';
import '../../css/y/y6yajw26h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oxj5z9e-b"/><path class="ti0uovb4m"/><path class="y6yajw26h"/></g>`,
		"fallback": "iconoir:keyframes",
	});
}

export default Component;
