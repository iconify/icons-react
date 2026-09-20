import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/ryc_4_24f.css';
import '../../css/j/j7mo58bub.css';
import '../../css/f/fws-n8mkg.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ryc_4_24f"/><path class="j7mo58bub"/><path class="fws-n8mkg"/></g>`,
		"fallback": "marketeq:search-alt-3",
	});
}

export default Component;
