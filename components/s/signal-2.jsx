import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hus16pvob.css';
import '../../css/z/z8mm0uzii.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hus16pvob"/><path class="z8mm0uzii"/></g>`,
		"fallback": "marketeq:signal-2",
	});
}

export default Component;
