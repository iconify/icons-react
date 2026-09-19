import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qau4bxb1f.css';
import '../../css/t/typc1sb3g.css';
import '../../css/i/iqos1m11s.css';
import '../../css/b/bwsczab2g.css';
import '../../css/r/r-1oq63yd.css';
import '../../css/q/qn2g-tb3b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qau4bxb1f"/><path class="typc1sb3g"/><path class="iqos1m11s"/><path class="bwsczab2g"/><path class="r-1oq63yd"/><rect class="qn2g-tb3b"/></g>`,
		"fallback": "glyphs:shapes-bold",
	});
}

export default Component;
