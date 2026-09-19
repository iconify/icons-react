import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lu4k41tds.css';
import '../../css/o/o-ri9ache.css';
import '../../css/k/kj4rhbcdr.css';
import '../../css/a/aev_nzgxh.css';
import '../../css/s/soq33u-at.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lu4k41tds"/><path class="o-ri9ache"/><path class="kj4rhbcdr"/><path class="aev_nzgxh"/><path class="soq33u-at"/></g>`,
		"fallback": "glyphs:sunrise-bold",
	});
}

export default Component;
