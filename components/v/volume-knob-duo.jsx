import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8y__jobg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jm7eamb2t.css';
import '../../css/h/h8yfof3aj.css';
import '../../css/w/wwl9hc22u.css';
import '../../css/x/xdws30brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8y__jobg secondary"/><g class="dt0cm9dhy primary"><path class="jm7eamb2t"/><path class="h8yfof3aj"/><path class="wwl9hc22u"/><path class="xdws30brv"/></g>`,
		"fallback": "iconaut:volume-knob-duo",
	});
}

export default Component;
