import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6vqhb7q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v-1ltacmn.css';
import '../../css/p/potl1vbrd.css';
import '../../css/d/dxc5lhiyx.css';
import '../../css/k/kerqeobiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj6vqhb7q secondary"/><g class="dt0cm9dhy primary"><path class="v-1ltacmn"/><path class="potl1vbrd"/><path class="dxc5lhiyx"/><path class="kerqeobiq"/></g>`,
		"fallback": "iconaut:invoice-duo",
	});
}

export default Component;
