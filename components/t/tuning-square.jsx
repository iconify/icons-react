import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/toenmhbyv.css';
import '../../css/f/fg6gr74ig.css';
import '../../css/k/kuka9vbtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="toenmhbyv"/><path class="fg6gr74ig"/><path clip-rule="evenodd" class="kuka9vbtd"/></g>`,
		"fallback": "reicon:tuning-square",
	});
}

export default Component;
