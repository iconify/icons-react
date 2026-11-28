import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb5kviydn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vj3ytwxdm.css';
import '../../css/o/op0-e7whw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb5kviydn secondary"/><g class="dt0cm9dhy primary"><path class="vj3ytwxdm"/><path class="op0-e7whw"/></g>`,
		"fallback": "iconaut:pickaxe-duo",
	});
}

export default Component;
