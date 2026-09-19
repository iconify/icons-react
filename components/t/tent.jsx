import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kc_uuzb-u.css';
import '../../css/d/dpgvrjd0j.css';
import '../../css/v/vyk1e9bbt.css';
import '../../css/t/trbaiac_h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kc_uuzb-u"/><path class="dpgvrjd0j"/><path class="vyk1e9bbt"/><path class="trbaiac_h"/></g>`,
		"fallback": "glyphs-poly:tent",
	});
}

export default Component;
