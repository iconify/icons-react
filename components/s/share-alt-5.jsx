import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vxz3hkt8w.css';
import '../../css/k/ka2iznb2q.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="vxz3hkt8w"/><path class="ka2iznb2q"/></g>`,
		"fallback": "marketeq:share-alt-5",
	});
}

export default Component;
