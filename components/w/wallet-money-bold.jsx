import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/umdn2-12o.css';
import '../../css/t/tlyq4trtp.css';
import '../../css/q/q8ae85b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="umdn2-12o"/><path clip-rule="evenodd" class="tlyq4trtp"/><path class="q8ae85b2x"/></g>`,
		"fallback": "solar:wallet-money-bold",
	});
}

export default Component;
