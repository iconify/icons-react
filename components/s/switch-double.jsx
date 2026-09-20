import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dufcmvb1k.css';
import '../../css/y/y47xabgrh.css';
import '../../css/g/gyb8uc20w.css';
import '../../css/z/zaho54k3g.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="dufcmvb1k"/><path class="y47xabgrh"/><path class="gyb8uc20w"/><path class="zaho54k3g"/></g>`,
		"fallback": "marketeq:switch-double",
	});
}

export default Component;
