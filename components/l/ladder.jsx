import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/js5qnacfg.css';
import '../../css/u/ua4nezstw.css';
import '../../css/l/lxggt5t6n.css';
import '../../css/g/g16iygj2h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="js5qnacfg"/><path class="ua4nezstw"/><path class="lxggt5t6n"/><path class="g16iygj2h"/></g>`,
		"fallback": "xero-emoji:ladder",
	});
}

export default Component;
