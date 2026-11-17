import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kksoo5x2s.css';
import '../../css/i/i41888b_p.css';
import '../../css/m/mx6o2rv6q.css';
import '../../css/s/s84s_lbks.css';
import '../../css/x/xnsux1j5k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kksoo5x2s"/><path class="i41888b_p"/><path class="mx6o2rv6q"/><path class="s84s_lbks"/><path class="xnsux1j5k"/>`,
		"fallback": "selfhst:vpn-sentinel",
	});
}

export default Component;
