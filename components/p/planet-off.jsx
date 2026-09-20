import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/s/s-xzqvejr.css';
import '../../css/d/dukry73pf.css';
import '../../css/s/sbozl5bay.css';
import '../../css/s/spjfx4bcg.css';
import '../../css/p/pja9v0dnj.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="s-xzqvejr"/><path clip-rule="evenodd" class="dukry73pf"/></g><path clip-rule="evenodd" class="sbozl5bay"/><path clip-rule="evenodd" class="spjfx4bcg"/><path clip-rule="evenodd" class="pja9v0dnj"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:planet-off",
	});
}

export default Component;
