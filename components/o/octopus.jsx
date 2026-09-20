import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1uvocoek.css';
import '../../css/c/cpzoy2bcj.css';
import '../../css/e/ep1f8xb-m.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/bes_t3brz.css';
import '../../css/o/ocvinx6xs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1uvocoek"/><path class="cpzoy2bcj"/><path class="ep1f8xb-m"/><g class="ij2x_72vy"><path class="bes_t3brz"/><path class="ocvinx6xs"/></g>`,
		"fallback": "openmoji:octopus",
	});
}

export default Component;
