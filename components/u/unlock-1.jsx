import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/p_ihmybbv.css';
import '../../css/l/lbla_23cn.css';
import '../../css/m/mgxcb8y_q.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="p_ihmybbv"/><path class="lbla_23cn"/><path class="mgxcb8y_q"/></g>`,
		"fallback": "marketeq:unlock-1",
	});
}

export default Component;
