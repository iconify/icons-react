import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k5vu_1awm.css';
import '../../css/b/b8muav1zi.css';
import '../../css/u/utnv9fgpg.css';
import '../../css/j/jlzv4qbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k5vu_1awm"/><path class="b8muav1zi"/><path class="utnv9fgpg"/><path class="jlzv4qbob"/></g>`,
		"fallback": "solar:mug-linear",
	});
}

export default Component;
