import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lr78om9_g.css';
import '../../css/j/j-3yojbro.css';
import '../../css/w/wk0dhccfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lr78om9_g"/><path class="j-3yojbro"/><path class="wk0dhccfa"/></g>`,
		"fallback": "solar:panel-left-open-linear",
	});
}

export default Component;
