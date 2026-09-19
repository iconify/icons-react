import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/x/xgl01hb1v.css';
import '../../css/s/sxd2klhxm.css';
import '../../css/e/evt5v2xqt.css';
import '../../css/y/y4mkzybqi.css';
import '../../css/i/i1p71g3hn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="xgl01hb1v"/><path clip-rule="evenodd" class="sxd2klhxm"/><path class="evt5v2xqt"/><path clip-rule="evenodd" class="y4mkzybqi"/></g><path clip-rule="evenodd" class="i1p71g3hn"/></g>`,
		"fallback": "pepicons:pause-print",
	});
}

export default Component;
