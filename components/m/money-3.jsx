import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nm4_sebsi.css';
import '../../css/m/mrh53gb6y.css';
import '../../css/s/szwkwybqi.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="nm4_sebsi"/><path class="mrh53gb6y"/><path class="szwkwybqi"/></g>`,
		"fallback": "marketeq:money-3",
	});
}

export default Component;
