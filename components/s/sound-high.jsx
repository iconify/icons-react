import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hzg-qbb4l.css';
import '../../css/w/wrbx-zbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hzg-qbb4l"/><path class="wrbx-zbyp"/></g>`,
		"fallback": "iconoir:sound-high",
	});
}

export default Component;
