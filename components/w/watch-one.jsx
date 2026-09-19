import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xm80o4b2a.css';
import '../../css/d/d_0depbqg.css';
import '../../css/d/dx_hcswmk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xm80o4b2a"/><circle class="d_0depbqg"/><path class="dx_hcswmk"/></g>`,
		"fallback": "icon-park-outline:watch-one",
	});
}

export default Component;
