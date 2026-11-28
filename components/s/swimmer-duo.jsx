import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaojgdcku.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pwyacq_9t.css';
import '../../css/l/lbixp3wyq.css';
import '../../css/p/pb--brbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaojgdcku secondary"/><g class="dt0cm9dhy primary"><path class="pwyacq_9t"/><path class="lbixp3wyq"/><path class="pb--brbnr"/></g>`,
		"fallback": "iconaut:swimmer-duo",
	});
}

export default Component;
