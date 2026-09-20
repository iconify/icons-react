import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gjkjc3bcb.css';
import '../../css/p/pt615k5ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gjkjc3bcb"/><path class="pt615k5ny"/></g>`,
		"fallback": "reicon:sidebar-right2",
	});
}

export default Component;
