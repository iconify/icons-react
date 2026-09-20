import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qjyu08bxw.css';
import '../../css/u/u43fgobpl.css';
import '../../css/i/ic0b-vbdx.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qjyu08bxw"/><rect class="u43fgobpl"/><path class="ic0b-vbdx"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:turntable-broken",
	});
}

export default Component;
