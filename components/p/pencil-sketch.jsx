import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wmiiyybyy.css';
import '../../css/i/ikidij4md.css';
import '../../css/f/fqyx1zd_r.css';
import '../../css/p/psqpflbbk.css';
import '../../css/w/wbezozb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wmiiyybyy"/><path class="ikidij4md wm-k"/><path class="fqyx1zd_r wm-a"/><path class="psqpflbbk wm-k"/><path class="wbezozb6y wm-a"/></g>`,
		"fallback": "withicons:pencil-sketch",
	});
}

export default Component;
