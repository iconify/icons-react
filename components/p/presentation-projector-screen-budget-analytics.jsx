import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fwp3xkm7q.css';
import '../../css/x/x251s65rp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fwp3xkm7q"/><path class="x251s65rp"/></g>`,
		"fallback": "streamline-ultimate:presentation-projector-screen-budget-analytics",
	});
}

export default Component;
