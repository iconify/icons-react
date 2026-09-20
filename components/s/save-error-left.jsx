import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cwz9o0b_a.css';
import '../../css/v/vckr9t-fv.css';
import '../../css/a/aij65i-1v.css';
import '../../css/v/v6srrtb_d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="cwz9o0b_a"/><path class="vckr9t-fv"/><path class="aij65i-1v"/><path class="v6srrtb_d"/></g>`,
		"fallback": "marketeq:save-error-left",
	});
}

export default Component;
