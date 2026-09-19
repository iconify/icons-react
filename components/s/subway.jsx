import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wolh3pfgd.css';
import '../../css/p/pbe9k3g_d.css';
import '../../css/o/og8-pqx9h.css';
import '../../css/l/ljaaf6brl.css';
import '../../css/c/ch01l1nqt.css';
import '../../css/r/r9e13bw3h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wolh3pfgd"/><path clip-rule="evenodd" class="pbe9k3g_d"/><path class="og8-pqx9h"/><path class="ljaaf6brl"/><rect class="ch01l1nqt"/><rect class="r9e13bw3h"/></g>`,
		"fallback": "glyphs-poly:subway",
	});
}

export default Component;
