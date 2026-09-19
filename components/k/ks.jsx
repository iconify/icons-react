import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/w-8n40b6x.css';
import '../../css/h/hd4ys4eun.css';
import '../../css/m/mhqx3ubxk.css';
import '../../css/c/cpckgcb4o.css';
import '../../css/u/uadr1cccd.css';
import '../../css/s/sk-9y1x_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsKs0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsKs0)"><path class="w-8n40b6x"/><path class="hd4ys4eun"/><path class="mhqx3ubxk"/><circle class="cpckgcb4o"/><circle class="uadr1cccd"/><path class="sk-9y1x_z"/></g>`,
		"fallback": "circle-flags:ks",
	});
}

export default Component;
