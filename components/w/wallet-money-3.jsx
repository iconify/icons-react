import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b3qz78bjj.css';
import '../../css/s/s4uu9jgsy.css';
import '../../css/u/uu__r-bso.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="b3qz78bjj"/><path class="s4uu9jgsy"/><path class="uu__r-bso"/></g>`,
		"fallback": "marketeq:wallet-money-3",
	});
}

export default Component;
