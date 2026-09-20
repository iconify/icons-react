import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/q06pzob3h.css';
import '../../css/s/slub69tgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="q06pzob3h"/><path class="slub69tgh"/></g>`,
		"fallback": "streamline-sharp-color:music-note-1",
	});
}

export default Component;
