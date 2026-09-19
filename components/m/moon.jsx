import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/m/mjbq1k7ia.css';
import '../../css/q/qrbzj1bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="mjbq1k7ia"/><path class="qrbzj1bmk"/></g>`,
		"fallback": "akar-icons:moon",
	});
}

export default Component;
