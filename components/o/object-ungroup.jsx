import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svbii8bvw.css';
import '../../css/t/tsi2e0_6j.css';
import '../../css/l/lhyyi3z4l.css';
import '../../css/s/s-htz7_sn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="svbii8bvw"/><path class="tsi2e0_6j"/><path class="lhyyi3z4l"/><path class="s-htz7_sn"/></g>`,
		"fallback": "glyphs-poly:object-ungroup",
	});
}

export default Component;
