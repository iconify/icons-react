import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xs89f78ex.css';
import '../../css/n/nmqind1sb.css';
import '../../css/g/gh0095zbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xs89f78ex"/><path class="nmqind1sb"/><path class="gh0095zbv"/></g>`,
		"fallback": "icon-park:pennant",
	});
}

export default Component;
