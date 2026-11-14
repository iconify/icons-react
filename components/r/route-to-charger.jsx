import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y6yyhbwot.css';
import '../../css/g/gdkakebdu.css';
import '../../css/o/o9qs78bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="y6yyhbwot"/><path class="gdkakebdu"/><path class="o9qs78bqo"/></g>`,
		"fallback": "evicons:route-to-charger",
	});
}

export default Component;
