import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awd9u4bgp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dd1x26btx.css';
import '../../css/c/cfkicbk9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awd9u4bgp secondary"/><g class="dt0cm9dhy primary"><path class="dd1x26btx"/><path class="cfkicbk9n"/></g>`,
		"fallback": "iconaut:phi-duo",
	});
}

export default Component;
