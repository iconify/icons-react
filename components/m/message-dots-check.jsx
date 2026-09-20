import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f4h9_zbfp.css';
import '../../css/g/gqujsbciq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f4h9_zbfp"/><path class="gqujsbciq"/></g>`,
		"fallback": "mage:message-dots-check",
	});
}

export default Component;
