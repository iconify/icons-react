import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l12u5k3ye.css';
import '../../css/i/ibs-b3bnk.css';
import '../../css/u/un073yd9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l12u5k3ye"/><path class="ibs-b3bnk"/><path clip-rule="evenodd" class="un073yd9d"/></g>`,
		"fallback": "solar:special-effects-outline",
	});
}

export default Component;
