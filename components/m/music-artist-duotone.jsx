import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hta0mxbau.css';
import '../../css/n/nbfqlubre.css';
import '../../css/s/s_9sokbmc.css';
import '../../css/t/txy0qobnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="hta0mxbau"/><circle class="nbfqlubre"/><circle class="s_9sokbmc"/><path class="txy0qobnn"/></g>`,
		"fallback": "iconamoon:music-artist-duotone",
	});
}

export default Component;
