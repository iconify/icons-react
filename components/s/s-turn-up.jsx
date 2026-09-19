import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/h/het9v552a.css';
import '../../css/g/gocnr_4vl.css';
import '../../css/a/ais3w1fco.css';
import '../../css/s/szza5-kcr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="het9v552a"/><path class="gocnr_4vl"/><path class="ais3w1fco"/><circle transform="rotate(-180 10 11)" class="szza5-kcr"/></g>`,
		"fallback": "icon-park:s-turn-up",
	});
}

export default Component;
