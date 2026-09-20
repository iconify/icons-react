import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kk12hpzil.css';
import '../../css/y/yx47hfbsa.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="kk12hpzil"/><path class="yx47hfbsa"/></g>`,
		"fallback": "marketeq:price-tag",
	});
}

export default Component;
