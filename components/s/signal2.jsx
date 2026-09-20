import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l3a64kbcs.css';
import '../../css/l/lqycpklho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l3a64kbcs"/><path class="lqycpklho"/></g>`,
		"fallback": "reicon:signal2",
	});
}

export default Component;
