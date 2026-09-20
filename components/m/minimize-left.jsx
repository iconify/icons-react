import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/d9e8n9bkc.css';
import '../../css/y/y2hefmbpu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="d9e8n9bkc"/><path class="y2hefmbpu"/></g>`,
		"fallback": "marketeq:minimize-left",
	});
}

export default Component;
