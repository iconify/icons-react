import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yegijm7ac.css';
import '../../css/o/oeiytgbpn.css';
import '../../css/y/y1ohljbkf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="yegijm7ac"/><path class="oeiytgbpn"/><path class="y1ohljbkf"/></g>`,
		"fallback": "marketeq:microphone-right",
	});
}

export default Component;
