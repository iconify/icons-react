import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d3zx-49_d.css';
import '../../css/j/jm8rwpb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d3zx-49_d"/><path class="jm8rwpb1n"/></g>`,
		"fallback": "mage:message-check",
	});
}

export default Component;
