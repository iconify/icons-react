import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c4e4_ybxm.css';
import '../../css/s/stxxa3bsa.css';
import '../../css/j/j2ya8sb9b.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="c4e4_ybxm"/><path class="stxxa3bsa"/><path class="j2ya8sb9b"/></g>`,
		"fallback": "marketeq:satellite-dish",
	});
}

export default Component;
