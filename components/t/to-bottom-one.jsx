import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nmobi0p3x.css';
import '../../css/g/gjal2mj8o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nmobi0p3x"/><path class="gjal2mj8o"/></g>`,
		"fallback": "icon-park:to-bottom-one",
	});
}

export default Component;
