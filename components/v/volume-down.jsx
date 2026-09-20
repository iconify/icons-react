import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/imlrvefxq.css';
import '../../css/l/l12fq0bxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="imlrvefxq"/><path class="l12fq0bxi"/></g>`,
		"fallback": "reicon:volume-down",
	});
}

export default Component;
