import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hzz7lbhmb.css';
import '../../css/h/hr56dqbzm.css';
import '../../css/f/f7c_j4b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hzz7lbhmb"/><path class="hr56dqbzm"/><path class="f7c_j4b5a"/></g>`,
		"fallback": "iconaut:waves-duo",
	});
}

export default Component;
