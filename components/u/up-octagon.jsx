import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hswuj6w7q.css';
import '../../css/q/qf8u70bvb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="hswuj6w7q"/><path class="qf8u70bvb"/></g>`,
		"fallback": "marketeq:up-octagon",
	});
}

export default Component;
