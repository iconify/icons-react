import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b-33s3b6f.css';
import '../../css/o/ohkx9_wlw.css';
import '../../css/s/s_l2cxbxm.css';
import '../../css/r/rwp25fbxv.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="b-33s3b6f"/><path class="ohkx9_wlw"/><path class="s_l2cxbxm"/><path class="rwp25fbxv"/></g>`,
		"fallback": "si-glyph:open",
	});
}

export default Component;
