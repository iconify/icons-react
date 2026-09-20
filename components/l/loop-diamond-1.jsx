import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vvhessdxw.css';
import '../../css/v/vd-_x_gyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="vvhessdxw"/><path class="vd-_x_gyd"/></g>`,
		"fallback": "streamline-cyber:loop-diamond-1",
	});
}

export default Component;
