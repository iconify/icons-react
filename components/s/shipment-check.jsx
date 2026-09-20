import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/dx3xswb7m.css';
import '../../css/h/hx_-lzbsl.css';
import '../../css/w/whehe9bkq.css';
import '../../css/k/kbo3xjmiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="dx3xswb7m"/><path class="hx_-lzbsl"/><path class="whehe9bkq"/><path class="kbo3xjmiu"/></g>`,
		"fallback": "streamline-sharp-color:shipment-check",
	});
}

export default Component;
