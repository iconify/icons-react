import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jin2j0b-d.css';
import '../../css/j/jfg0svbzw.css';
import '../../css/k/kh3yuubdz.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/mvkqf0b1i.css';
import '../../css/g/gplcw0brg.css';
import '../../css/s/s8xi0xbdk.css';
import '../../css/v/vu7s6tb7c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jin2j0b-d"/><path class="jfg0svbzw"/><path class="kh3yuubdz"/><g class="brzn_0bpr"><path class="mvkqf0b1i"/><path class="gplcw0brg"/><circle class="s8xi0xbdk"/><circle class="vu7s6tb7c"/></g>`,
		"fallback": "openmoji:skull",
	});
}

export default Component;
