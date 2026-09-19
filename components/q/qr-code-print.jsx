import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/a/aik6ennql.css';
import '../../css/i/iq0zx-5xa.css';
import '../../css/u/ul3feg_ya.css';
import '../../css/r/rqt-30bru.css';
import '../../css/o/ot14dp5ps.css';
import '../../css/i/iipq21bph.css';
import '../../css/j/j9u1qwb4g.css';
import '../../css/f/fdc74q0wc.css';
import '../../css/l/lr46sx-5g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="aik6ennql"/><path clip-rule="evenodd" class="iq0zx-5xa"/></g><path clip-rule="evenodd" class="ul3feg_ya"/><path class="rqt-30bru"/><path clip-rule="evenodd" class="ot14dp5ps"/><path clip-rule="evenodd" class="iipq21bph"/><path clip-rule="evenodd" class="j9u1qwb4g"/><path clip-rule="evenodd" class="fdc74q0wc"/><path clip-rule="evenodd" class="lr46sx-5g"/></g>`,
		"fallback": "pepicons:qr-code-print",
	});
}

export default Component;
