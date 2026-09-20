import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dzsc6abhd.css';
import '../../css/v/vrqq989cp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="dzsc6abhd"/><path class="vrqq989cp"/></g>`,
		"fallback": "marketeq:link-alt",
	});
}

export default Component;
