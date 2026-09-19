import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i_r28w9ux.css';
import '../../css/h/h2lxde8ed.css';
import '../../css/a/abbey2buw.css';
import '../../css/y/ykcsqobzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="i_r28w9ux"/><path class="h2lxde8ed"/><path class="abbey2buw"/><path class="ykcsqobzd"/></g>`,
		"fallback": "icon-park:turn-around",
	});
}

export default Component;
