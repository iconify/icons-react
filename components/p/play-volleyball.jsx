import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggc5c-1wb.css';
import '../../css/b/bgrw82b0m.css';
import '../../css/w/waj9yrbya.css';
import '../../css/b/bgvt5lblx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ggc5c-1wb"/><path class="bgrw82b0m"/><path class="waj9yrbya"/><path class="bgvt5lblx"/></g>`,
		"fallback": "icon-park:play-volleyball",
	});
}

export default Component;
