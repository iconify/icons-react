import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xrcqwe5gk.css';
import '../../css/o/ovdhb7bzz.css';
import '../../css/w/w4hap8bee.css';
import '../../css/s/sgt4c0i2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xrcqwe5gk"/><path class="ovdhb7bzz"/><path class="w4hap8bee"/><path class="sgt4c0i2j"/></g>`,
		"fallback": "iconaut:pliers",
	});
}

export default Component;
