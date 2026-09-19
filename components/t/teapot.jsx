import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uwbdedcpb.css';
import '../../css/z/z7q2ob2wl.css';
import '../../css/q/q27f-lbdg.css';
import '../../css/v/vyzvnwbfi.css';
import '../../css/l/l5kgxeqcc.css';
import '../../css/g/gb9u7-b5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="uwbdedcpb"/><path class="z7q2ob2wl"/><path class="q27f-lbdg"/><path class="vyzvnwbfi"/><path class="l5kgxeqcc"/><path class="gb9u7-b5g"/></g>`,
		"fallback": "icon-park:teapot",
	});
}

export default Component;
