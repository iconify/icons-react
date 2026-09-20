import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/isu12okvq.css';
import '../../css/u/uw1l7ac0q.css';
import '../../css/r/rhi5lidna.css';
import '../../css/i/izg1iobbm.css';
import '../../css/a/aglhxzbnc.css';
import '../../css/i/i6qxywu9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="isu12okvq"/><path clip-rule="evenodd" class="uw1l7ac0q"/><path class="rhi5lidna"/><path class="izg1iobbm"/><path class="aglhxzbnc"/><path class="i6qxywu9f"/></g>`,
		"fallback": "reicon:pill-jar2-duotone",
	});
}

export default Component;
