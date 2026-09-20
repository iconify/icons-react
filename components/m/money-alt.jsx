import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nm4_sebsi.css';
import '../../css/q/qbbcu_hsg.css';
import '../../css/r/rp6_zw-7u.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="nm4_sebsi"/><path class="qbbcu_hsg"/><path class="rp6_zw-7u"/></g>`,
		"fallback": "marketeq:money-alt",
	});
}

export default Component;
