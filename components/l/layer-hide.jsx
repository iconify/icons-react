import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/y7ug80b_w.css';
import '../../css/l/lrma0ps3x.css';
import '../../css/t/tk5w-tb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="y7ug80b_w"/><path class="lrma0ps3x"/><path class="tk5w-tb_v"/></g>`,
		"fallback": "streamline-cyber:layer-hide",
	});
}

export default Component;
