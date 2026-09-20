import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/z4je1nbdq.css';
import '../../css/q/qhja99bbw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="z4je1nbdq"/><path class="qhja99bbw"/></g>`,
		"fallback": "marketeq:left-right-scroll-bar",
	});
}

export default Component;
