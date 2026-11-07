import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loxl4zb4k.css';
import '../../css/t/tumocjvoo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/sjb0kabnr.css';
import '../../css/e/ezby3sblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loxl4zb4k"/><path class="tumocjvoo"/><g class="xtpeb-edw"><path class="sjb0kabnr"/><path class="ezby3sblm"/></g>`,
		"fallback": "solar:ranking-bold-duotone",
	});
}

export default Component;
