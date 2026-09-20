import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uwgbxybqk.css';
import '../../css/u/u77epz48j.css';
import '../../css/p/po-4i2jlq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="uwgbxybqk"/><path class="u77epz48j"/><path class="po-4i2jlq"/></g>`,
		"fallback": "marketeq:signal",
	});
}

export default Component;
