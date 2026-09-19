import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2f5qo9ra.css';
import '../../css/n/n-88vfcwe.css';
import '../../css/h/hphoz6f5k.css';
import '../../css/r/rgq2tbmxq.css';
import '../../css/k/kinyf4bfq.css';
import '../../css/u/umz_u252p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u2f5qo9ra"/><path class="n-88vfcwe"/><path class="hphoz6f5k"/><circle class="rgq2tbmxq"/><path class="kinyf4bfq"/><path class="umz_u252p"/></g>`,
		"fallback": "glyphs-poly:satellite-dish",
	});
}

export default Component;
