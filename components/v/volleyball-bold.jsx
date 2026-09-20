import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f63d8qhks.css';
import '../../css/b/bq3rtxb6u.css';
import '../../css/t/tyxzc9bcm.css';
import '../../css/a/ahtkhu2_p.css';
import '../../css/i/i7p5pab2u.css';
import '../../css/p/po-6-ib2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f63d8qhks"/><path class="bq3rtxb6u"/><path class="tyxzc9bcm"/><path class="ahtkhu2_p"/><path class="i7p5pab2u"/><path class="po-6-ib2u"/></g>`,
		"fallback": "solar:volleyball-bold",
	});
}

export default Component;
