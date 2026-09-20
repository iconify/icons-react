import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q1wkn1bon.css';
import '../../css/y/y19ony82e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q1wkn1bon"/><path class="y19ony82e"/></g>`,
		"fallback": "mage:security-shield",
	});
}

export default Component;
