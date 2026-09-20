import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/te1dkybwn.css';
import '../../css/p/p1-h1qg_d.css';
import '../../css/j/j-k29q-gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="te1dkybwn"/><path class="p1-h1qg_d"/><path class="j-k29q-gx"/></g>`,
		"fallback": "streamline-cyber:synchronize-diamond",
	});
}

export default Component;
