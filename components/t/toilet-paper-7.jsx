import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/twphzohwo.css';
import '../../css/v/vm0d8dxzv.css';
import '../../css/t/te0t9wbba.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="twphzohwo"/><path class="vm0d8dxzv"/><path class="te0t9wbba"/></g>`,
		"fallback": "marketeq:toilet-paper-7",
	});
}

export default Component;
