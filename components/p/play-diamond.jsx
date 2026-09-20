import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/idlw553oh.css';
import '../../css/n/n7o919__l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="idlw553oh"/><path class="n7o919__l"/></g>`,
		"fallback": "mynaui:play-diamond",
	});
}

export default Component;
