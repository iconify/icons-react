import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/r/r2h8wicnq.css';
import '../../css/i/ii_5iybpn.css';
import '../../css/y/yjs-xr50x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="r2h8wicnq"/><path class="ii_5iybpn"/><path class="yjs-xr50x"/></g>`,
		"fallback": "icon-park:short-skirt",
	});
}

export default Component;
