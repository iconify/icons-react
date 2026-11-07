import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b_l8t2bil.css';
import '../../css/l/lxnaexxsa.css';
import '../../css/p/pqr2gub2q.css';
import '../../css/r/r7m1as5xz.css';
import '../../css/m/mx9f_4bzg.css';
import '../../css/h/ht1jk4zsa.css';
import '../../css/r/r762e5d0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b_l8t2bil"/><path class="lxnaexxsa"/><path class="pqr2gub2q"/><path class="r7m1as5xz"/><path class="mx9f_4bzg"/><path class="ht1jk4zsa"/><path class="r762e5d0s"/></g>`,
		"fallback": "solar:video-frame-cut-2-line-duotone",
	});
}

export default Component;
