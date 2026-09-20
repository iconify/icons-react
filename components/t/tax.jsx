import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k6udp_bbs.css';
import '../../css/m/mhj4-pb9j.css';
import '../../css/b/bouips0cw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="k6udp_bbs"/><path class="mhj4-pb9j"/><path class="bouips0cw"/></g>`,
		"fallback": "marketeq:tax",
	});
}

export default Component;
