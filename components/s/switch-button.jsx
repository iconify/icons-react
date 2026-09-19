import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/f/fb3tv3bfw.css';
import '../../css/o/o3gfejbmt.css';
import '../../css/m/ma9v-ebqy.css';
import '../../css/t/tpuugf0vy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="fb3tv3bfw"/><path class="o3gfejbmt"/><path class="ma9v-ebqy"/><path class="tpuugf0vy"/></g>`,
		"fallback": "icon-park:switch-button",
	});
}

export default Component;
