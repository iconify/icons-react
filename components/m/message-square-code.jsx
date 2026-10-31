import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xb944pczb.css';
import '../../css/k/ktu4lab1r.css';
import '../../css/k/ktm0_rbaq.css';
import '../../css/l/l62xjiwol.css';
import '../../css/x/xca4ibb9p.css';
import '../../css/x/x63a8ebcy.css';
import '../../css/b/bpjksdbes.css';
import '../../css/w/wpme-du2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k xb944pczb"/><path class="ktu4lab1r wm-deco"/><path class="ktm0_rbaq wm-k"/><path class="l62xjiwol wm-k"/><path class="wm-shadow xca4ibb9p"/><path class="wm-shine x63a8ebcy"/><path class="bpjksdbes wm-shine"/><path class="wm-shine wpme-du2i"/></g>`,
		"fallback": "withicons-valentine:message-square-code",
	});
}

export default Component;
