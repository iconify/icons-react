import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9l3hbf0t.css';
import '../../css/y/y0j0mcbcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9l3hbf0t"/><path class="y0j0mcbcg"/>`,
		"fallback": "selfhst:rancher-harvester",
	});
}

export default Component;
