import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gidf1abbb.css';
import '../../css/k/k45dlwhns.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="gidf1abbb"/><path class="k45dlwhns"/></g>`,
		"fallback": "marketeq:safebox-2",
	});
}

export default Component;
