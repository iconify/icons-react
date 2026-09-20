import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wlk7cymyb.css';
import '../../css/m/mio52ig2b.css';
import '../../css/y/yh3pvrblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wlk7cymyb"/><circle class="mio52ig2b"/><path class="yh3pvrblm"/></g>`,
		"fallback": "lucide:users-round",
	});
}

export default Component;
