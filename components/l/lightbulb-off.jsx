import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nd-n99b9d.css';
import '../../css/a/a5l3e4bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nd-n99b9d"/><path class="a5l3e4bsi"/></g>`,
		"fallback": "hugeicons:lightbulb-off",
	});
}

export default Component;
