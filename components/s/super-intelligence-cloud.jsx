import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hky3jty7c.css';
import '../../css/w/wwo3-9bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hky3jty7c"/><path class="wwo3-9bcl"/></g>`,
		"fallback": "hugeicons:super-intelligence-cloud",
	});
}

export default Component;
