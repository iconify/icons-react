import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kmqwx5bdw.css';
import '../../css/p/polbdngrx.css';
import '../../css/u/uwoegob-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kmqwx5bdw"/><path clip-rule="evenodd" class="polbdngrx"/><path clip-rule="evenodd" class="uwoegob-u"/></g>`,
		"fallback": "solar:turntable-bold-duotone",
	});
}

export default Component;
