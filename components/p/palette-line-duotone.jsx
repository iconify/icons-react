import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idco1xbej.css';
import '../../css/r/rifo2czrt.css';
import '../../css/h/hq7o26lao.css';
import '../../css/m/mlq66nbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="idco1xbej"/><path class="rifo2czrt"/><path class="hq7o26lao"/><path class="mlq66nbgo"/></g>`,
		"fallback": "solar:palette-line-duotone",
	});
}

export default Component;
