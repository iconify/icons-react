import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oikujhwge.css';
import '../../css/m/madkpqytw.css';
import '../../css/u/u7i45u-pn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oikujhwge"/><path class="madkpqytw"/><path clip-rule="evenodd" class="u7i45u-pn"/></g>`,
		"fallback": "solar:radio-bold",
	});
}

export default Component;
