import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qb-mlqbns.css';
import '../../css/e/esc57vs2e.css';
import '../../css/r/r40fi4qti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qb-mlqbns"/><path class="esc57vs2e wm-k"/><path class="r40fi4qti wm-a"/></g>`,
		"fallback": "withicons:surprised-sketch",
	});
}

export default Component;
