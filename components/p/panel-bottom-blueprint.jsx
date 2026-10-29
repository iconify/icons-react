import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qxr4d-bhc.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/g/g56t_c8un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qxr4d-bhc wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="g56t_c8un"/></g>`,
		"fallback": "withicons:panel-bottom-blueprint",
	});
}

export default Component;
