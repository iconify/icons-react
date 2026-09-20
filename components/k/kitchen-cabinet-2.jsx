import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vf6axhb9i.css';
import '../../css/d/d1mkfz38q.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="vf6axhb9i"/><path class="d1mkfz38q"/></g>`,
		"fallback": "marketeq:kitchen-cabinet-2",
	});
}

export default Component;
