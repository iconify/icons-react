import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bggh63bml.css';
import '../../css/t/t0xoyibqi.css';
import '../../css/e/egkx-6bee.css';
import '../../css/c/cu3bv91lm.css';
import '../../css/i/ib9ht21er.css';
import '../../css/x/xjb22ab_z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bggh63bml"/><path class="t0xoyibqi"/><path class="egkx-6bee"/><path class="cu3bv91lm"/><path class="ib9ht21er"/><path class="xjb22ab_z"/>`,
		"fallback": "openmoji:recycling-symbol",
	});
}

export default Component;
