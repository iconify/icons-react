import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f_zksqbkr.css';
import '../../css/z/zpc15gbnz.css';
import '../../css/o/oohfzfbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="f_zksqbkr"/><path class="zpc15gbnz"/><path class="oohfzfbun"/></g>`,
		"fallback": "streamline-cyber:masks",
	});
}

export default Component;
