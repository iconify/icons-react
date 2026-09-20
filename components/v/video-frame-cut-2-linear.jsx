import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b_l8t2bil.css';
import '../../css/c/c8qz4oc-t.css';
import '../../css/d/d01mapbla.css';
import '../../css/d/dmi3dcg8q.css';
import '../../css/j/j4udqobyt.css';
import '../../css/b/b2jsrbbio.css';
import '../../css/k/kdd1x8gsg.css';
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
		"content": `<g class="ipq1z-bjh"><path class="b_l8t2bil"/><path class="c8qz4oc-t"/><path class="d01mapbla"/><path class="dmi3dcg8q"/><path class="j4udqobyt"/><path class="b2jsrbbio"/><path class="kdd1x8gsg"/><path class="mx9f_4bzg"/><path class="ht1jk4zsa"/><path class="r762e5d0s"/></g>`,
		"fallback": "solar:video-frame-cut-2-linear",
	});
}

export default Component;
