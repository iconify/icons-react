import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kag-7rzzi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rr5eggbpd.css';
import '../../css/i/istu5egkh.css';
import '../../css/x/xcpnxtbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kag-7rzzi secondary"/><g class="dt0cm9dhy primary"><path class="rr5eggbpd"/><path class="istu5egkh"/><path class="xcpnxtbeg"/></g>`,
		"fallback": "iconaut:plug-duo",
	});
}

export default Component;
