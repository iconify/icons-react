import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iban41b3x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sz9tdkb8m.css';
import '../../css/w/wbhiowbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iban41b3x secondary"/><g class="dt0cm9dhy primary"><path class="sz9tdkb8m"/><path class="wbhiowbqh"/></g>`,
		"fallback": "iconaut:mail-open-duo",
	});
}

export default Component;
