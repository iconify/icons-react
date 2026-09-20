import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wxmrz8s0w.css';
import '../../css/d/dhj46m5kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wxmrz8s0w"/><path class="dhj46m5kl"/></g>`,
		"fallback": "mage:tag",
	});
}

export default Component;
