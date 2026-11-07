import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucym07b5n.css';
import '../../css/h/hpp6ujt5x.css';
import '../../css/k/kroiddczm.css';
import '../../css/c/cfu0w31nz.css';
import '../../css/k/kuukv2b8k.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/ug1ixiawc.css';
import '../../css/h/hy1ur8bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucym07b5n"/><path class="hpp6ujt5x"/><path class="kroiddczm"/><path class="cfu0w31nz"/><path class="kuukv2b8k"/><g class="xtpeb-edw"><path class="ug1ixiawc"/><path class="hy1ur8bdq"/></g>`,
		"fallback": "solar:suspension-bolt-bold-duotone",
	});
}

export default Component;
