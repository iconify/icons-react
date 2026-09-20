import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mnjg11blx.css';
import '../../css/e/eedwr6bsz.css';
import '../../css/m/mfs0ozzcb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mnjg11blx"/><path class="eedwr6bsz"/><path class="mfs0ozzcb"/></g>`,
		"fallback": "marketeq:lock-circle",
	});
}

export default Component;
