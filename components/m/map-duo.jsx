import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avy98-bgc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/inid0ebvq.css';
import '../../css/i/ivcfsdbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avy98-bgc secondary"/><g class="dt0cm9dhy primary"><path class="inid0ebvq"/><path class="ivcfsdbps"/></g>`,
		"fallback": "iconaut:map-duo",
	});
}

export default Component;
