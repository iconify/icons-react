import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/r/r5abxlgoq.css';
import '../../css/x/x1gs_6bce.css';
import '../../css/g/grbczychx.css';
import '../../css/j/jg97ilkre.css';
import '../../css/t/tjg9ffvbi.css';
import '../../css/l/lcnmw-bvs.css';
import '../../css/j/jnqq0fbyn.css';
import '../../css/c/cq9fa-b9g.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="r5abxlgoq"/><path class="x1gs_6bce"/><path class="grbczychx"/><path class="jg97ilkre"/></g><path clip-rule="evenodd" class="tjg9ffvbi"/><path clip-rule="evenodd" class="lcnmw-bvs"/><path clip-rule="evenodd" class="jnqq0fbyn"/><path clip-rule="evenodd" class="cq9fa-b9g"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:television-play-off",
	});
}

export default Component;
