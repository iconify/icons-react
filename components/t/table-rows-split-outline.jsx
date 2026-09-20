import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzihu6mnd.css';
import '../../css/t/tkmbd-7nq.css';
import '../../css/c/cdk-29bud.css';
import '../../css/x/xcnzdwbbb.css';
import '../../css/l/lc79vcbth.css';
import '../../css/n/nko2_ol9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jzihu6mnd"/><path clip-rule="evenodd" class="tkmbd-7nq"/><path class="cdk-29bud"/><path class="xcnzdwbbb"/><path class="lc79vcbth"/><path class="nko2_ol9h"/></g>`,
		"fallback": "solar:table-rows-split-outline",
	});
}

export default Component;
