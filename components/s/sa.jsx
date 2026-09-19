import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwey4ebcb.css';
import '../../css/k/kw_djybrm.css';
import '../../css/u/u4tr0j94d.css';
import '../../css/e/ea361u4-y.css';
import '../../css/p/piztulodx.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xwey4ebcb"/><path clip-rule="evenodd" class="kw_djybrm"/><path class="u4tr0j94d"/><path clip-rule="evenodd" class="ea361u4-y"/><path class="piztulodx"/></g>`,
		"fallback": "flagpack:sa",
	});
}

export default Component;
