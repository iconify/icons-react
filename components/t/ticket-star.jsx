import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ymka79vtq.css';
import '../../css/y/yjwvrfb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ymka79vtq"/><path class="yjwvrfb1s"/></g>`,
		"fallback": "reicon:ticket-star",
	});
}

export default Component;
