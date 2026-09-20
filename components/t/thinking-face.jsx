import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/g/ggfn25blg.css';
import '../../css/r/r-3qa02_q.css';
import '../../css/y/y943a8bfq.css';
import '../../css/a/al0n5zblc.css';
import '../../css/e/e9i0fd9no.css';
import '../../css/s/sxoqaqv_g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><circle class="ggfn25blg"/><path class="r-3qa02_q"/></g><path class="y943a8bfq"/><path class="al0n5zblc"/><path class="e9i0fd9no"/><path class="sxoqaqv_g"/>`,
		"fallback": "openmoji:thinking-face",
	});
}

export default Component;
