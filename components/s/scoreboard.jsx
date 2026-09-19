import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/ptwe4cb9z.css';
import '../../css/v/vxu3gbcsh.css';
import '../../css/w/wwemqabtt.css';
import '../../css/v/vlxhfd40x.css';
import '../../css/z/zazep1t8r.css';
import '../../css/q/q_m13ob9r.css';
import '../../css/a/asqzkac8z.css';
import '../../css/t/tt279lh1o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="ptwe4cb9z"/><path class="vxu3gbcsh"/><path class="wwemqabtt"/><path class="vlxhfd40x"/><path class="zazep1t8r"/><ellipse class="q_m13ob9r"/><path class="asqzkac8z"/><path class="tt279lh1o"/></g>`,
		"fallback": "icon-park:scoreboard",
	});
}

export default Component;
