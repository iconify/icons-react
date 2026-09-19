import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pmdassb6b.css';
import '../../css/r/r391tharu.css';
import '../../css/n/nhznk4smx.css';
import '../../css/c/cb2wazo0z.css';
import '../../css/k/k1ou4_b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pmdassb6b"/><path class="r391tharu"/><path class="nhznk4smx"/><path class="cb2wazo0z"/><path class="k1ou4_b5f"/></g>`,
		"fallback": "hugeicons:maps-location-01",
	});
}

export default Component;
